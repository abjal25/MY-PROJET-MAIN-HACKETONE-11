// Global functionality for all pages
document.addEventListener('DOMContentLoaded', () => {
    console.log('MindBridge app loaded.');

    const navLinks = document.querySelectorAll('.main-nav a');
    const currentPath = window.location.pathname.split('/').pop();

    // Highlight current page in navigation
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Handle language selection (mock functionality)
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (event) => {
            console.log(`Language changed to: ${event.target.value}`);
            // In a real app, this would trigger content translation
            alert(`Language switched to ${event.target.value.toUpperCase()}`);
        });
    }

    // Login/Register button logic (UI only)
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-register');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => alert('Login functionality (UI only)'));
    }
    if (registerBtn) {
        registerBtn.addEventListener('click', () => alert('Register functionality (UI only)'));
    }
});