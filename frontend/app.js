// API Configuration
const API_BASE_URL = '/api';

// State Management
let currentUser = null;
let selectedUserType = 'content_partner';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
});

// Authentication Check
async function checkAuth() {
    try {
        const response = await fetch(`${API_BASE_URL}/me`, {
            credentials: 'include'
        });
        
        if (response.ok) {
            const data = await response.json();
            currentUser = data.user;
            showDashboard();
        } else {
            showHero();
        }
    } catch (error) {
        console.error('Auth check failed:', error);
        showHero();
    }
}

// Show/Hide Sections
function showHero() {
    document.getElementById('hero-section').style.display = 'block';
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('nav-auth-links').style.display = 'flex';
    document.getElementById('nav-user-info').style.display = 'none';
}

function showDashboard() {
    document.getElementById('hero-section').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'block';
    document.getElementById('nav-auth-links').style.display = 'none';
    document.getElementById('nav-user-info').style.display = 'flex';
    
    // Update nav user info
    document.getElementById('nav-user-name').textContent = currentUser.name;
    document.getElementById('nav-user-balance').textContent = `$${currentUser.balance.toFixed(2)}`;
    
    // Show appropriate dashboard
    if (currentUser.user_type === 'content_partner') {
        document.getElementById('content-partner-dashboard').style.display = 'block';
        document.getElementById('ad-sponsor-dashboard').style.display = 'none';
        updateContentPartnerDashboard();
    } else if (currentUser.user_type === 'ad_sponsor') {
        document.getElementById('content-partner-dashboard').style.display = 'none';
        document.getElementById('ad-sponsor-dashboard').style.display = 'block';
        updateAdSponsorDashboard();
    }
}

function updateContentPartnerDashboard() {
    document.getElementById('cp-earnings').textContent = `$${currentUser.balance.toFixed(2)}`;
    document.getElementById('cp-website').textContent = currentUser.website_url || '-';
    
    // Pre-fill the website URL input field
    const websiteInput = document.getElementById('cp-new-website');
    if (websiteInput && currentUser.website_url) {
        websiteInput.value = currentUser.website_url;
    }
    
    // Update script tag with current domain
    const currentDomain = window.location.origin;
    const scriptTag = `<script src="${currentDomain}/apn-ads.js"></script>`;
    document.getElementById('script-tag-code').textContent = scriptTag;
}

function updateAdSponsorDashboard() {
    document.getElementById('as-balance').textContent = `$${currentUser.balance.toFixed(2)}`;
    document.getElementById('as-spent').textContent = `$${currentUser.total_spent?.toFixed(2) || '0.00'}`;
    document.getElementById('as-campaigns').textContent = currentUser.campaigns?.length || 0;
    
    // Load campaigns
    loadCampaigns();
}

async function loadCampaigns() {
    try {
        const response = await fetch(`${API_BASE_URL}/campaigns`, {
            credentials: 'include'
        });
        
        if (response.ok) {
            const data = await response.json();
            displayCampaigns(data.campaigns);
            
            // Update active campaigns counter
            const activeCampaigns = data.campaigns.filter(c => c.status === 'active').length;
            document.getElementById('as-campaigns').textContent = activeCampaigns;
        } else {
            console.error('Failed to load campaigns');
        }
    } catch (error) {
        console.error('Error loading campaigns:', error);
    }
}

function displayCampaigns(campaigns) {
    const listContainer = document.getElementById('campaigns-list');
    
    if (!campaigns || campaigns.length === 0) {
        listContainer.innerHTML = '<p class="no-campaigns">No campaigns yet. Create your first campaign below!</p>';
        return;
    }
    
    listContainer.innerHTML = campaigns.map(campaign => `
        <div class="campaign-item">
            <div class="campaign-header">
                <div>
                    <h4>${campaign.name}</h4>
                    <span class="campaign-category">${getCategoryIcon(campaign.category)} ${campaign.category}</span>
                </div>
                <span class="campaign-status status-${campaign.status}">${campaign.status}</span>
            </div>
            <p class="campaign-description">${campaign.description || 'No description'}</p>
            <div class="campaign-stats">
                <span>💰 Budget: $${campaign.budget.toFixed(2)}</span>
                <span>📊 Spent: $${campaign.spent.toFixed(2)}</span>
                <span>🔗 <a href="${campaign.redirect_website_url}" target="_blank">Redirect URL</a></span>
            </div>
            <div class="campaign-actions">
                ${campaign.status === 'active' ? 
                    `<button class="btn-secondary-small" onclick="toggleCampaignStatus('${campaign.id}', 'paused')">⏸️ Pause</button>` :
                    `<button class="btn-primary-small" onclick="toggleCampaignStatus('${campaign.id}', 'active')">▶️ Resume</button>`
                }
            </div>
        </div>
    `).join('');
}

function getCategoryIcon(category) {
    const icons = {
        'food': '🍔',
        'cosmetics': '💄',
        'other': '📦'
    };
    return icons[category] || '📦';
}

// Copy functions for integration instructions
function copyScriptTag() {
    const code = document.getElementById('script-tag-code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        showToast('Script tag copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Failed to copy. Please copy manually.', 'error');
    });
}

function copyAdSpaceCode() {
    const code = '<div class="apn-ad-space"></div>';
    navigator.clipboard.writeText(code).then(() => {
        showToast('Ad space code copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Failed to copy. Please copy manually.', 'error');
    });
}

async function toggleCampaignStatus(campaignId, newStatus) {
    try {
        const response = await fetch(`${API_BASE_URL}/campaigns/${campaignId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ status: newStatus })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showToast(`Campaign ${newStatus === 'active' ? 'resumed' : 'paused'} successfully!`, 'success');
            loadCampaigns(); // Reload campaigns list
        } else {
            showToast(data.error || 'Failed to update campaign status', 'error');
        }
    } catch (error) {
        console.error('Toggle campaign status error:', error);
        showToast('Network error. Please try again.', 'error');
    }
}

// Modal Functions
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('auth-modal').style.display = 'block';
}

function showRegister(userType = null) {
    if (userType) {
        selectUserType(userType);
    }
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('auth-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('auth-modal').style.display = 'none';
}

function selectUserType(type) {
    selectedUserType = type;
    document.getElementById('register-user-type').value = type;
    
    // Update button styles
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.type === type) {
            btn.classList.add('active');
        }
    });
    
    // Show/hide website URL field
    const websiteGroup = document.getElementById('website-url-group');
    if (type === 'content_partner') {
        websiteGroup.style.display = 'block';
        document.getElementById('register-website').required = true;
    } else {
        websiteGroup.style.display = 'none';
        document.getElementById('register-website').required = false;
    }
}

// Authentication Handlers
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            currentUser = data.user;
            closeModal();
            showToast('Login successful!', 'success');
            showDashboard();
        } else {
            showToast(data.error || 'Login failed', 'error');
        }
    } catch (error) {
        console.error('Login error:', error);
        showToast('Network error. Please try again.', 'error');
    }
}

async function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const userType = document.getElementById('register-user-type').value;
    const websiteUrl = document.getElementById('register-website').value;
    
    const payload = {
        name,
        email,
        password,
        user_type: userType
    };
    
    if (userType === 'content_partner') {
        payload.website_url = websiteUrl;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(payload)
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showToast('Registration successful! Please login.', 'success');
            showLogin();
            // Clear form
            event.target.reset();
        } else {
            showToast(data.error || 'Registration failed', 'error');
        }
    } catch (error) {
        console.error('Registration error:', error);
        showToast('Network error. Please try again.', 'error');
    }
}

async function logout() {
    try {
        await fetch(`${API_BASE_URL}/logout`, {
            method: 'POST',
            credentials: 'include'
        });
        
        currentUser = null;
        showToast('Logged out successfully', 'success');
        showHero();
    } catch (error) {
        console.error('Logout error:', error);
        showToast('Logout failed', 'error');
    }
}

// Content Partner Functions
async function updateWebsiteUrl(event) {
    event.preventDefault();
    
    const newWebsiteUrl = document.getElementById('cp-new-website').value;
    
    try {
        const response = await fetch(`${API_BASE_URL}/update-website`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ website_url: newWebsiteUrl })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showToast('Website URL updated successfully!', 'success');
            
            // Update displayed website URL
            currentUser.website_url = newWebsiteUrl;
            document.getElementById('cp-website').textContent = newWebsiteUrl;
            
            // Clear form
            event.target.reset();
        } else {
            showToast(data.error || 'Failed to update website URL', 'error');
        }
    } catch (error) {
        console.error('Update website URL error:', error);
        showToast('Network error. Please try again.', 'error');
    }
}

async function requestAd() {
    // This is a placeholder - you'll need to implement the backend endpoint
    showToast('Feature coming soon: Request ad from available campaigns', 'success');
    
    // Simulate ad display for demo
    const adDisplay = document.getElementById('ad-display-container');
    adDisplay.style.display = 'block';
    
    document.getElementById('ad-name').textContent = 'Sample Campaign';
    document.getElementById('ad-description').textContent = 'This is a sample advertisement description.';
    document.getElementById('ad-image').src = 'https://via.placeholder.com/600x300?text=Sample+Ad';
    
    // Update balance (in real app, this would come from backend)
    currentUser.balance += 0.06;
    document.getElementById('cp-earnings').textContent = `$${currentUser.balance.toFixed(2)}`;
    document.getElementById('nav-user-balance').textContent = `$${currentUser.balance.toFixed(2)}`;
}

// Ad Sponsor Functions
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview-img').src = e.target.result;
            document.getElementById('image-preview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

async function createCampaign(event) {
    event.preventDefault();
    
    const name = document.getElementById('campaign-name').value;
    const description = document.getElementById('campaign-description').value;
    const category = document.getElementById('campaign-category').value;
    const budget = parseFloat(document.getElementById('campaign-budget').value);
    const imageFile = document.getElementById('campaign-image').files[0];
    const redirectUrl = document.getElementById('redirect-url').value || 'http://redirectedwebsite.com';
    
    // Validate budget
    if (budget > currentUser.balance) {
        showToast('Insufficient balance for this campaign', 'error');
        return;
    }
    
    const payload = {
        name,
        description,
        category,
        budget,
        redirect_website_url: redirectUrl
    };
    
    // Convert image to base64 if provided
    if (imageFile) {
        try {
            const base64Image = await fileToBase64(imageFile);
            payload.image = base64Image.split(',')[1]; // Remove data:image/...;base64, prefix
        } catch (error) {
            showToast('Error processing image', 'error');
            return;
        }
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/campaigns`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(payload)
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showToast('Campaign created successfully!', 'success');
            
            // Update balance and stats
            // currentUser.balance -= budget;
            // currentUser.total_spent = (currentUser.total_spent || 0) + budget;
            currentUser.campaigns = currentUser.campaigns || [];
            currentUser.campaigns.push(data.campaign.id);
            
            updateAdSponsorDashboard();
            document.getElementById('nav-user-balance').textContent = `$${currentUser.balance.toFixed(2)}`;
            
            // Clear form
            event.target.reset();
            document.getElementById('image-preview').style.display = 'none';
        } else {
            showToast(data.error || 'Campaign creation failed', 'error');
        }
    } catch (error) {
        console.error('Campaign creation error:', error);
        showToast('Network error. Please try again.', 'error');
    }
}

// Utility Functions
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('auth-modal');
    if (event.target === modal) {
        closeModal();
    }
}
