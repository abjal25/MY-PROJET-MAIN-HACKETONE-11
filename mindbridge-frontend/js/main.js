// Main JavaScript for MindBridge Platform

// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const languageSelect = document.querySelector('.language-select');
const scrollToTopBtn = document.querySelector('.scroll-to-top');

// Mobile Menu Toggle
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', 
        mobileMenuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
});

// Language Switching
function handleLanguageChange() {
    const selectedLanguage = languageSelect.value;
    // In a real app, this would load translations
    console.log('Language changed to:', selectedLanguage);
    // Here you would typically fetch translations and update the UI
    document.documentElement.lang = selectedLanguage;
}

// Show/Hide Scroll to Top Button
function toggleScrollToTop() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn?.classList.add('show');
    } else {
        scrollToTopBtn?.classList.remove('show');
    }
}

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if (languageSelect) {
        languageSelect.addEventListener('change', handleLanguageChange);
    }
    
    window.addEventListener('scroll', toggleScrollToTop);
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }
    
    // Add loading animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Accessibility: Add keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape key
    if (e.key === 'Escape' && navLinks?.classList.contains('active')) {
        toggleMobileMenu();
    }
});