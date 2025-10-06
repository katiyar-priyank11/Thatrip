/* ================================
   ThatTrip - Main JavaScript
   ================================ */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('ThatTrip website loaded successfully!');

    // Initialize all components
    initializeDestinations();
    initializeServices();

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                const navToggle = document.getElementById('nav-toggle');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
});

// Initialize Destinations from content.js
function initializeDestinations() {
    const destinationsGrid = document.getElementById('destinations-grid');

    if (!destinationsGrid || typeof destinations === 'undefined') {
        console.error('Destinations grid or data not found');
        return;
    }

    destinations.forEach(destination => {
        const card = createDestinationCard(destination);
        destinationsGrid.appendChild(card);
    });
}

// Create Destination Card
function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'destination-card scroll-reveal';

    card.innerHTML = `
        <img src="${destination.image}"
             alt="${destination.alt}"
             class="destination-image"
             loading="lazy">
        <div class="destination-overlay">
            ${destination.badge ? `<span class="destination-badge">${destination.badge}</span>` : ''}
            <h3 class="destination-name">${destination.name}</h3>
            <p class="destination-description">${destination.description}</p>
            <p class="destination-price">${destination.price}</p>
        </div>
    `;

    return card;
}

// Initialize Services from content.js
function initializeServices() {
    const servicesGrid = document.getElementById('services-grid');

    if (!servicesGrid || typeof services === 'undefined') {
        console.error('Services grid or data not found');
        return;
    }

    services.forEach(service => {
        const card = createServiceCard(service);
        servicesGrid.appendChild(card);
    });
}

// Create Service Card
function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card scroll-reveal';

    const featuresList = service.features.map(feature => `<li>${feature}</li>`).join('');

    card.innerHTML = `
        <i class="fas ${service.icon}"></i>
        <h3>${service.title}</h3>
        <ul>${featuresList}</ul>
    `;

    return card;
}

// Utility: Debounce Function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility: Throttle Function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Utility: Format Number with Commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        font-weight: 600;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Export functions for use in other modules
window.ThatTrip = {
    debounce,
    throttle,
    formatNumber,
    showNotification
};
