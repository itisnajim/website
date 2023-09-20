document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const logoImage = document.getElementById('logo-image');

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
    logoImage.src = 'logo-light.png';
  }

  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      logoImage.src = 'logo-light.png';
    } else {
      logoImage.src = 'logo.png';
    }
  });
});
