# Ad Provider Network - Get Ad API

## Endpoint: `/api/get-ad`

### Description
This endpoint is used by content partner websites to fetch and display advertisements from the network.

### Method
`GET`

### Query Parameters
- `content_partner_id` (required): The unique ID of the content partner requesting the ad
- `fingerprint` (required): A unique identifier for tracking ad impressions (e.g., user session ID, device ID)
- `category` (optional): The category of ad to display (`food`, `cosmetics`, or `other`). Defaults to `food`

### Response
- Returns an image file (PNG, JPG, JPEG, GIF, or WEBP)
- Content partner automatically earns $0.10 per ad display

### Example Usage

**JavaScript:**
```javascript
const contentPartnerId = 'your-partner-id';
const fingerprint = 'unique-user-fingerprint';
const category = 'food';

const adUrl = `/api/get-ad?content_partner_id=${contentPartnerId}&fingerprint=${fingerprint}&category=${category}`;

// Display in img tag
document.getElementById('ad-container').innerHTML = `<img src="${adUrl}" alt="Advertisement">`;
```

**HTML:**
```html
<img src="/api/get-ad?content_partner_id=12345&fingerprint=abc123&category=food" alt="Advertisement">
```

### Directory Structure
Ads are stored in:
- `data/ads/foods/` - Food category advertisements
- `data/ads/cosmetics/` - Cosmetics category advertisements
- `data/ads/others/` - Other category advertisements

Place your ad images in the appropriate category folder. Supported formats: PNG, JPG, JPEG, GIF, WEBP

### Error Responses
- `400`: Missing required parameters
- `404`: Content partner not found or no ads available
- `500`: Server error
