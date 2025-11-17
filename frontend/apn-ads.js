// Ad Provider Network - Content Partner Integration Script
// Include this script in your website to display ads from the Ad Provider Network

(function() {
  'use strict';

  // const APN_API_URL = 'http://adprovider.com/api/get-ad';
  const APN_API_URL = 'http://localhost/api';

  async function getFingerprint() {
    const components = [
      navigator.userAgent,
      navigator.language,
      screen.colorDepth,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      // Canvas fingerprinting for unique user identification
      await (async () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('fingerprint', 2, 2);
        return canvas.toDataURL();
      })()
    ];
    // Simple hash (use a better one like MurmurHash in production)
    return components.join('###').split('').reduce((hash, char) => ((hash << 5) - hash) + char.charCodeAt(0) | 0, 0).toString(16);
  }

  // Use MutationObserver to detect when ad spaces are added to the DOM
  async function initializeAdSpaces() {
    const fingerprint = await getFingerprint();
    const websiteUrl = window.location.origin;
    let adSpaceCounter = 0;
    
    function loadAdsInElements() {
      const adSpaces = document.getElementsByClassName('apn-ad-space');
      console.log('APN: Found ad spaces:', adSpaces.length);
      let i = 1;
      Array.from(adSpaces).forEach(adSpace => {
        // Skip if already loaded
        if (adSpace.dataset.adLoaded === 'true') return;
        adSpace.id = adSpace.id || `apn-ad-space-${i}`;
        i += 1;
        // Add unique slot ID to ensure different ads for each space
        const slotId = ++adSpaceCounter;
        const adUrl = `${APN_API_URL}/get-ad?website_url=${encodeURIComponent(websiteUrl)}&fingerprint=${encodeURIComponent(fingerprint)}&ad_space_id=${encodeURIComponent(adSpace.id)}&slot=${slotId}&cache_bust=${Date.now()}`;
        
        // Create img element for the ad
        const img = document.createElement('img');
        img.src = adUrl;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        img.alt = 'Advertisement';
        
        // Handle image loading errors
        img.onerror = function() {
          console.error('APN: Failed to load ad');
          adSpace.style.display = 'none';
        };
        
        adSpace.appendChild(img);
        adSpace.dataset.adLoaded = 'true';
        
        // Add click handler
        adSpace.addEventListener('click', () => {
          const clickUrl = `${APN_API_URL}/ad-clicked?website_url=${encodeURIComponent(websiteUrl)}&fingerprint=${encodeURIComponent(fingerprint)}&ad_space_id=${encodeURIComponent(adSpace.id)}`;
          fetch(clickUrl, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
              if (data.redirect) {
                window.open(data.redirect, '_blank');
              }
            });
          console.log('APN: Ad clicked with fingerprint:', fingerprint);
          // Track click event here if needed
        });
        
        console.log('APN: Ad loaded in space with fingerprint:', fingerprint);
      });
    }
    
    // Load ads immediately if elements exist
    loadAdsInElements();
    
    // Watch for new ad spaces being added dynamically
    const observer = new MutationObserver(() => {
      loadAdsInElements();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAdSpaces);
  } else {
    initializeAdSpaces();
  }
})();
