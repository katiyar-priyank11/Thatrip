/* ================================
   ThatTrip - Animations
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initCounterAnimations();
    initParallax();
});

// Scroll Reveal Animations using Intersection Observer
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');

    if (revealElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: CONFIG.animation.observerThreshold || 0.15
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// Animated Counter for Statistics
function initCounterAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Animate Counter Function
function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = CONFIG.animation.counterSpeed || 2000;
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    const isDecimal = target % 1 !== 0;

    const updateCounter = () => {
        current += increment;

        if (current < target) {
            if (isDecimal) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
            requestAnimationFrame(updateCounter);
        } else {
            if (isDecimal) {
                element.textContent = target.toFixed(1);
            } else {
                element.textContent = target.toLocaleString();
            }
        }
    };

    updateCounter();
}

// Parallax Scroll Effect
function initParallax() {
    const hero = document.querySelector('.hero');

    if (!hero) return;

    // Only apply parallax on desktop
    if (window.innerWidth < 768) return;

    // Disabled parallax to prevent z-index overlap issues
    // The background-attachment: fixed in CSS provides a similar effect

    /* const parallaxHandler = window.ThatTrip.throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;

        if (scrolled <= window.innerHeight) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    }, 10);

    window.addEventListener('scroll', parallaxHandler);

    // Remove parallax on resize if mobile
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            hero.style.transform = 'none';
        }
    }); */
}

// Scroll Indicator Animation (already handled by CSS, but can add hide on scroll)
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (!scrollIndicator) return;

    const hideIndicator = window.ThatTrip.throttle(() => {
        if (window.pageYOffset > window.innerHeight * 0.3) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }, 100);

    window.addEventListener('scroll', hideIndicator);
});

// Add entrance animations to feature cards, service cards, etc.
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll-reveal class to elements that should animate on scroll
    const animateOnScroll = [
        '.feature-card',
        '.stat-card',
        '.contact-item'
    ];

    animateOnScroll.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (!el.classList.contains('scroll-reveal')) {
                el.classList.add('scroll-reveal');
            }
        });
    });

    // Re-initialize scroll animations for dynamically added elements
    setTimeout(() => {
        initScrollAnimations();
    }, 100);
});
