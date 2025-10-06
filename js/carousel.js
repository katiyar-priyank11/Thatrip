/* ================================
   ThatTrip - Testimonials Carousel
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
    initTestimonialsCarousel();
});

function initTestimonialsCarousel() {
    const testimonialsWrapper = document.getElementById('testimonials-wrapper');

    if (!testimonialsWrapper || typeof testimonials === 'undefined') {
        console.error('Testimonials wrapper or data not found');
        return;
    }

    // Populate testimonials
    testimonials.forEach(testimonial => {
        const slide = createTestimonialSlide(testimonial);
        testimonialsWrapper.appendChild(slide);
    });

    // Initialize Swiper Carousel
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.testimonials-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: CONFIG.carousel.autoplayDelay || 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                768: {
                    slidesPerView: 1
                },
                1024: {
                    slidesPerView: 1
                }
            }
        });
    } else {
        console.error('Swiper library not loaded');
    }
}

// Create Testimonial Slide
function createTestimonialSlide(testimonial) {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    // Generate star rating
    const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);

    slide.innerHTML = `
        <div class="testimonial-card">
            <img src="${testimonial.avatar}"
                 alt="${testimonial.name}"
                 class="testimonial-avatar"
                 loading="lazy">
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-rating">${stars}</div>
            <h4 class="testimonial-author">${testimonial.name}</h4>
            <p class="testimonial-location">${testimonial.location}</p>
            <p class="testimonial-package" style="font-size: 0.875rem; color: var(--primary-blue); margin-top: 0.5rem;">
                ${testimonial.package}
            </p>
        </div>
    `;

    return slide;
}
