document.addEventListener('DOMContentLoaded', (event) => {
  const toggleSwitch = document.querySelector('.dark-mode-toggle');
  toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});