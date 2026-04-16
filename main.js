const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 1. Initial Theme Setup (No Transition)
const savedTheme = localStorage.getItem('color-theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

// 2. The Toggle Handler
themeToggleBtn.addEventListener('click', () => {
    // Toggle the theme
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});