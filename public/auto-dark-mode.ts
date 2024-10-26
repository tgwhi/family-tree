/**
 * Automatic toggling of dark mode.
 */
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

const darkModePref = window.matchMedia('(prefers-color-scheme: dark)');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}

// In case the system preference changes between page loads
darkModePref.addEventListener('change', (e) => toggleDarkMode());
