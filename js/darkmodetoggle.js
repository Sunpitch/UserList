const themeButtons = document.querySelectorAll('[data-bs-theme-value]');

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-bs-theme-value');

        document.documentElement.setAttribute('data-bs-theme', theme);
    });
});