// accensione esagono status
document.querySelectorAll('.hex.status').forEach(hex => {
  hex.addEventListener('click', () => {
    hex.classList.toggle('active');
  });
});
