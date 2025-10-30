// The Literary Corner - Static HTML JavaScript

// Newsletter form handler
document.addEventListener('DOMContentLoaded', function() {
    // Newsletter forms
    const newsletterForms = document.querySelectorAll('form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]')?.value;
            
            if (email && validateEmail(email)) {
                alert('Thank you for subscribing! We\'ll keep you updated with our latest books and news.');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, section').forEach(element => {
        observer.observe(element);
    });
});

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add active class to current nav link
const currentLocation = location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
    }
});

// Simple search functionality (if search form exists)
const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = this.querySelector('input[type="search"]').value;
        if (searchTerm) {
            // Redirect to catalog with search parameter
            window.location.href = `catalog.html?search=${encodeURIComponent(searchTerm)}`;
        }
    });
}
