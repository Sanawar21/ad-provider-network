import io
from flask import Flask, request, session, jsonify, send_from_directory, send_file
from flask_cors import CORS
from tinydb import  Query
from classes import Fingerprint, AdSponsor, ContentPartner, UserType, AdCampaign, CampaignStatus, CampaignCategory
from database import Database
from werkzeug.security import generate_password_hash, check_password_hash
from uuid import uuid4
from datetime import datetime
import base64
import os
import random

app = Flask(__name__, static_folder='frontend', static_url_path='')
app.secret_key = "secret_key"

# Allow all CORS requests
CORS(app, resources={r"/*": {"origins": "*", "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"], "allow_headers": "*", "supports_credentials": True}})

db = Database("data/db.json")


# Serve frontend
@app.route('/')
def index():
    return send_from_directory('frontend', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(os.path.join('frontend', path)):
        return send_from_directory('frontend', path)
    return send_from_directory('frontend', 'index.html')


@app.route('/api/register', methods=['POST'])
def register():
    """
    Register a new user (either Ad Sponsor or Content Partner)
    
    Expected JSON:
    {
        "name": "string",
        "email": "string",
        "password": "string",
        "user_type": "ad_sponsor" or "content_partner",
        "website_url": "string" (required only for content_partner)
    }
    """
    # try:
    data = request.get_json()
    
    # Validate required fields
    if not data or not all(k in data for k in ['name', 'email', 'password', 'user_type']):
        return jsonify({'error': 'Missing required fields'}), 400
    
    # Check if user already exists
    existing_user = db.get_user_by_email(data['email'])
    if existing_user:
        return jsonify({'error': 'User with this email already exists'}), 409
    
    # Validate user type
    try:
        user_type = UserType(data['user_type'])
    except ValueError:
        return jsonify({'error': 'Invalid user type. Must be "ad_sponsor" or "content_partner"'}), 400
    
    # Hash password
    hashed_password = generate_password_hash(data['password'])
    
    # Create user based on type
    user_id = str(uuid4())
    
    if user_type == UserType.AD_SPONSOR:
        user = AdSponsor(
            user_id=user_id,
            name=data['name'],
            email=data['email'],
            user_type=user_type,
            balance=100.0,  # Start with $100 budget
            created_at=str(datetime.utcnow()),
            password_hash=hashed_password
        )
    elif user_type == UserType.CONTENT_PARTNER:
        if 'website_url' not in data:
            return jsonify({'error': 'website_url is required for content partners'}), 400
        
        # Check if website already registered
        existing_website = db.get_content_partner_by_website(data['website_url'])
        if existing_website:
            return jsonify({'error': 'This website is already registered'}), 409
        
        user = ContentPartner(
            user_id=user_id,
            name=data['name'],
            email=data['email'],
            user_type=user_type,
            website_url=data['website_url'],
            balance=0.0,  # Content partners start with $0
            created_at=str(datetime.utcnow()),
            password_hash=hashed_password
        )
    
    
    db.create_user(user)
    
    return jsonify({
        'message': 'User registered successfully',
        'user': {
            'user_id': user.user_id,
            'name': user.name,
            'email': user.email,
            'user_type': user.user_type,
            'balance': user.balance
        }
    }), 201
    
    # except Exception as e:
    #     return jsonify({'error': str(e)}), 500


@app.route('/api/login', methods=['POST'])
def login():
    """
    Login user and create session
    
    Expected JSON:
    {
        "email": "string",
        "password": "string"
    }
    """
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data or not all(k in data for k in ['email', 'password']):
            return jsonify({'error': 'Missing email or password'}), 400
        
        # Get user by email
        user = db.get_user_by_email(data['email'])
        if not user:
            return jsonify({'error': 'Invalid email or password'}), 401
        
        # Get user data with password hash
        UserQuery = Query()
        user_data = db.users_table.get(UserQuery.email == data['email'])
        
        if not user_data or 'password_hash' not in user_data:
            return jsonify({'error': 'Invalid email or password'}), 401
        
        # Verify password
        if not check_password_hash(user_data['password_hash'], data['password']):
            return jsonify({'error': 'Invalid email or password'}), 401
        
        # Create session
        session['user_id'] = user.user_id
        session['email'] = user.email
        session['user_type'] = user.user_type
        
        return jsonify({
            'message': 'Login successful',
            'user': {
                'user_id': user.user_id,
                'name': user.name,
                'email': user.email,
                'user_type': user.user_type,
                'balance': user.balance
            }
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/campaigns', methods=['POST'])
def create_ad_campaign():
    """
    Create a new ad campaign (Ad Sponsors only)
    
    Expected JSON:
    {
        "name": "string",
        "description": "string" (optional),
        "budget": float,
        "image": "base64_encoded_string" (optional)
    }
    """
    # Check authentication
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    # Verify user is an ad sponsor
    if session.get('user_type') != UserType.AD_SPONSOR:
        return jsonify({'error': 'Only ad sponsors can create campaigns'}), 403
    
    try:
        data = request.get_json()
        
        redirect_website_url = data.get('redirect_website_url', 'http://redirectedwebsite.com')

        # Validate required fields
        if not data or not all(k in data for k in ['name', 'budget', 'category']):
            return jsonify({'error': 'Missing required fields (name, budget, category)'}), 400
        
        # Validate budget
        if data['budget'] <= 0:
            return jsonify({'error': 'Budget must be greater than 0'}), 400
        
        # Validate category
        try:
            category = CampaignCategory(data['category'])
        except ValueError:
            return jsonify({'error': 'Invalid category. Must be "food", "cosmetics", or "other"'}), 400
        
        # Get sponsor
        sponsor = db.get_user_by_id(session['user_id'])
        if not sponsor:
            return jsonify({'error': 'User not found'}), 404
        
        # Check if sponsor has sufficient balance
        if sponsor.balance < data['budget']:
            return jsonify({'error': 'Insufficient balance to create this campaign'}), 400
        
        # Process image if provided
        image_data = None
        if 'image' in data and data['image']:
            try:
                # Keep as base64 string for JSON storage
                # Remove data URL prefix if present (e.g., "data:image/jpeg;base64,")
                image_str = data['image']
                if ',' in image_str and image_str.startswith('data:'):
                    image_data = image_str.split(',', 1)[1]
                else:
                    image_data = image_str
                # Validate it's valid base64
                base64.b64decode(image_data)
            except Exception as e:
                return jsonify({'error': f'Invalid image data: {str(e)}'}), 400
        
        # Create campaign
        campaign_id = str(uuid4())
        campaign = AdCampaign(
            id=campaign_id,
            name=data['name'],
            sponsor_id=session['user_id'],
            description=data.get('description'),
            budget=data['budget'],
            category=category,
            status=CampaignStatus.ACTIVE,
            created_at=str(datetime.utcnow()),
            image=image_data,
            redirect_website_url=redirect_website_url
        )
        
        # Save campaign to database
        db.create_ad_campaign(campaign)
        
        # Update sponsor's campaigns list
        if isinstance(sponsor, AdSponsor):
            sponsor.campaigns.append(campaign_id)
            db.update_user(sponsor)
        
        # Deduct budget from sponsor's balance
        # sponsor.balance -= data['budget']
        # sponsor.total_spent += data['budget']
        db.update_user(sponsor)
        
        return jsonify({
            'message': 'Campaign created successfully',
            'campaign': {
                'id': campaign.id,
                'name': campaign.name,
                'sponsor_id': campaign.sponsor_id,
                'description': campaign.description,
                'budget': campaign.budget,
                'status': campaign.status,
                'created_at': campaign.created_at,
                'has_image': image_data is not None
            }
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/logout', methods=['POST'])
def logout():
    """Logout user and clear session"""
    session.clear()
    return jsonify({'message': 'Logout successful'}), 200


@app.route('/api/me', methods=['GET'])
def get_current_user():
    """Get current logged-in user information"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    try:
        user = db.get_user_by_id(session['user_id'])
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        return jsonify({
            'user': {
                'user_id': user.user_id,
                'name': user.name,
                'email': user.email,
                'user_type': user.user_type,
                'balance': user.balance,
                'created_at': user.created_at,
                'website_url': user.website_url if isinstance(user, ContentPartner) else None,
                'total_spent': user.total_spent if isinstance(user, AdSponsor) else None
            }
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/campaigns', methods=['GET'])
def get_campaigns():
    """Get all campaigns for the logged-in ad sponsor"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    # Verify user is an ad sponsor
    if session.get('user_type') != UserType.AD_SPONSOR:
        return jsonify({'error': 'Only ad sponsors can view campaigns'}), 403
    
    try:
        sponsor = db.get_user_by_id(session['user_id'])
        if not sponsor:
            return jsonify({'error': 'User not found'}), 404
        
        campaigns = []
        if isinstance(sponsor, AdSponsor) and sponsor.campaigns:
            for campaign_id in sponsor.campaigns:
                campaign = db.get_campaign_by_id(campaign_id)
                if campaign:
                    campaigns.append({
                        'id': campaign.id,
                        'name': campaign.name,
                        'description': campaign.description,
                        'category': campaign.category,
                        'budget': campaign.budget,
                        'spent': campaign.spent,
                        'status': campaign.status,
                        'created_at': campaign.created_at,
                        'has_image': campaign.image is not None,
                        'redirect_website_url': campaign.redirect_website_url
                    })
        
        return jsonify({'campaigns': campaigns}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/campaigns/<campaign_id>', methods=['PATCH'])
def update_campaign_status(campaign_id):
    """Update campaign status (pause/resume)"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    # Verify user is an ad sponsor
    if session.get('user_type') != UserType.AD_SPONSOR:
        return jsonify({'error': 'Only ad sponsors can update campaigns'}), 403
    
    try:
        data = request.get_json()
        
        if not data or 'status' not in data:
            return jsonify({'error': 'Missing status field'}), 400
        
        # Validate status
        try:
            new_status = CampaignStatus(data['status'])
        except ValueError:
            return jsonify({'error': 'Invalid status. Must be "active", "paused", or "completed"'}), 400
        
        # Get campaign
        campaign = db.get_campaign_by_id(campaign_id)
        if not campaign:
            return jsonify({'error': 'Campaign not found'}), 404
        
        # Verify ownership
        if campaign.sponsor_id != session['user_id']:
            return jsonify({'error': 'You do not have permission to update this campaign'}), 403
        
        # Update status
        campaign.status = new_status
        db.update_campaign(campaign)
        
        return jsonify({
            'message': 'Campaign status updated successfully',
            'campaign': {
                'id': campaign.id,
                'name': campaign.name,
                'status': campaign.status
            }
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/update-website', methods=['PUT'])
def update_website_url():
    """Update content partner's website URL"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    # Verify user is a content partner
    if session.get('user_type') != UserType.CONTENT_PARTNER:
        return jsonify({'error': 'Only content partners can update website URL'}), 403
    
    try:
        data = request.get_json()
        
        if not data or 'website_url' not in data:
            return jsonify({'error': 'Missing website_url field'}), 400
        
        new_website_url = data['website_url']
        
        # Check if website already registered by another user
        existing_website = db.get_content_partner_by_website(new_website_url)
        if existing_website and existing_website.user_id != session['user_id']:
            return jsonify({'error': 'This website is already registered by another user'}), 409
        
        # Get current user
        user = db.get_user_by_id(session['user_id'])
        if not user or not isinstance(user, ContentPartner):
            return jsonify({'error': 'User not found'}), 404
        
        # Update website URL
        user.website_url = new_website_url
        db.update_user(user)
        
        return jsonify({
            'message': 'Website URL updated successfully',
            'website_url': new_website_url
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/get-ad', methods=['GET'])
def get_ad():
        """
        Serve an ad based on website URL and user fingerprint
        Returns a targeted ad from campaign database or fallback to random ad

        Query parameters:
        - website_url: The URL of the requesting website
        - fingerprint: User's browser fingerprint for tracking
        """
    # try:
        website_url = request.args.get('website_url')
        fingerprint_id = request.args.get('fingerprint')
        ad_space_id = request.args.get('ad_space_id')

        
        if not website_url or not fingerprint_id:
            return jsonify({'error': 'Missing website_url or fingerprint parameters'}), 400
        
        fingerprint = db.get_fingerprint_by_id(fingerprint_id)
        if not fingerprint:
            fingerprint = Fingerprint(id=fingerprint_id)
            db.create_fingerprint(fingerprint)
        
        campaigns = db.get_active_campaigns()
        content_partner = db.get_content_partner_by_website(website_url)
        
        if not content_partner:
            return jsonify({'error': 'Website not registered as content partner'}), 404

        if fingerprint.interests:
            interest = fingerprint.interests[0]
            campaigns = [c for c in campaigns if c.category.value == interest]

        campaign = random.choice(campaigns) if campaigns else None

        if campaign and campaign.image:
            fingerprint.campaigns_shown.append(campaign.id)
            fingerprint.loaded_ad_spaces[ad_space_id+website_url] = campaign.id
            db.update_fingerprint(fingerprint)

            # Decode base64 string to bytes  
            image_bytes = base64.b64decode(campaign.image)
            return send_file(
                io.BytesIO(image_bytes),
                mimetype='image/jpeg',
                as_attachment=False
            )
        
        return jsonify({'error': 'No ad available'}), 404

        
    # except Exception as e:
    #     print(e)
    #     return jsonify({'error': str(e)}), 500

@app.route('/api/ad-clicked', methods=['GET'])
def ad_clicked():
    try:
        website_url = request.args.get('website_url')
        fingerprint_id = request.args.get('fingerprint')
        ad_space_id = request.args.get('ad_space_id')

        if not fingerprint_id or not website_url:
            return jsonify({'error': 'Missing fingerprint or website_url'}), 400

        fingerprint = db.get_fingerprint_by_id(fingerprint_id)
        campaign_id = fingerprint.loaded_ad_spaces.get(ad_space_id+website_url)
        campaign = db.get_ad_campaign(campaign_id)
        sponsor = db.get_ad_sponsor_by_campaign(campaign_id)
        content_partner = db.get_content_partner_by_website(website_url)

        campaign.spent += 0.1
        sponsor.total_spent += 0.1
        content_partner.balance += 0.06
        fingerprint.campaigns_clicked.append(campaign_id)
        if campaign.category.value not in fingerprint.interests:
            fingerprint.interests.append(campaign.category.value)
        
        db.update_campaign(campaign)
        db.update_user(sponsor)
        db.update_user(content_partner)
        db.update_fingerprint(fingerprint)
        
        return jsonify({'redirect': campaign.redirect_website_url}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=80, host="0.0.0.0")