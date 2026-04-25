// Reveal Animations using Intersection Observer
const revealElements = document.querySelectorAll('.reveal, .reveal-delay, .reveal-delay-long, .step, .service-card, .portfolio-card, .about-card, .ceo-section');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Dynamic Navbar background
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! Our team will get back to you shortly.');
        contactForm.reset();
    });
}

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const toggleIcon = themeToggle.querySelector('.toggle-icon');
const currentTheme = localStorage.getItem('theme') || 'dark';

// Initialize theme
document.documentElement.setAttribute('data-theme', currentTheme);
updateToggleIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let nextTheme = theme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateToggleIcon(nextTheme);
});

function updateToggleIcon(theme) {
    toggleIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}
