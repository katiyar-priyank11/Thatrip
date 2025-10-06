/* ================================
   ThatTrip - Form Validation & Submission
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});

function initContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) {
        console.error('Contact form not found');
        return;
    }

    form.addEventListener('submit', handleFormSubmit);

    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

// Handle Form Submission
async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitButton = form.querySelector('.btn-submit');
    const btnText = submitButton.querySelector('.btn-text');
    const btnLoading = submitButton.querySelector('.btn-loading');
    const notification = document.getElementById('form-notification');

    // Validate all fields
    const isValid = validateForm(form);

    if (!isValid) {
        showFormNotification('Please fill in all required fields correctly.', 'error');
        return;
    }

    // Show loading state
    submitButton.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-block';

    // Collect form data
    const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        destination: form.destination.value,
        adults: form.adults.value,
        children: form.children.value,
        travel_date: form.travel_date.value,
        budget: form.budget.value,
        message: form.message.value.trim()
    };

    try {
        // Send email using EmailJS
        if (typeof emailjs !== 'undefined') {
            await emailjs.send(
                CONFIG.emailJS.serviceId,
                CONFIG.emailJS.templateId,
                formData
            );

            showFormNotification('Thank you! Your enquiry has been sent successfully. We will contact you soon.', 'success');
            form.reset();
        } else {
            // Fallback: Log to console if EmailJS is not configured
            console.log('Form submission (EmailJS not configured):', formData);
            showFormNotification('Demo mode: Form data logged to console. Please configure EmailJS for actual submission.', 'success');
            form.reset();
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showFormNotification('Oops! Something went wrong. Please try again later.', 'error');
    } finally {
        // Reset button state
        submitButton.disabled = false;
        btnText.style.display = 'inline-block';
        btnLoading.style.display = 'none';
    }
}

// Validate Entire Form
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

// Validate Individual Field
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let errorMessage = '';
    let isValid = true;

    // Clear previous error
    clearFieldError(field);

    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'This field is required';
        isValid = false;
    }
    // Email validation
    else if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid email address';
            isValid = false;
        }
    }
    // Phone validation
    else if (fieldName === 'phone' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.length < 10) {
            errorMessage = 'Please enter a valid phone number';
            isValid = false;
        }
    }
    // Name validation
    else if (fieldName === 'name' && value) {
        if (value.length < 2) {
            errorMessage = 'Name must be at least 2 characters';
            isValid = false;
        }
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

// Show Field Error
function showFieldError(field, message) {
    field.classList.add('error');
    const errorElement = field.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Clear Field Error
function clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = field.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

// Show Form Notification
function showFormNotification(message, type) {
    const notification = document.getElementById('form-notification');

    if (!notification) return;

    notification.textContent = message;
    notification.className = `form-notification ${type}`;
    notification.style.display = 'block';

    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    }

    // Scroll to notification
    notification.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
