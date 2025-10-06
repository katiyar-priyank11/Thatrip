/* ================================
   ThatTrip - Configuration
   ================================ */

const CONFIG = {
    // EmailJS Configuration
    emailJS: {
        serviceId: 'your_service_id',        // Replace with your EmailJS service ID
        templateId: 'your_template_id',      // Replace with your EmailJS template ID
        publicKey: 'your_public_key'         // Replace with your EmailJS public key
    },

    // Google Analytics (Optional)
    googleAnalytics: {
        trackingId: 'G-XXXXXXXXXX'          // Replace with your Google Analytics tracking ID
    },

    // reCAPTCHA (Optional)
    recaptcha: {
        siteKey: 'your_site_key'            // Replace with your reCAPTCHA site key
    },

    // Animation Settings
    animation: {
        observerThreshold: 0.15,            // How much of element should be visible before animating
        counterSpeed: 2000                  // Duration of counter animation in ms
    },

    // Carousel Settings
    carousel: {
        autoplayDelay: 5000,                // Autoplay delay in ms
        slidesPerView: 1,
        spaceBetween: 30
    }
};

// Initialize EmailJS when the page loads
if (typeof emailjs !== 'undefined') {
    emailjs.init(CONFIG.emailJS.publicKey);
}
