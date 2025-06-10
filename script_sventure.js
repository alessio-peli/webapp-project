document.querySelectorAll('.hex.sventura').forEach(hex => {
  let clickTimeout = null;

  hex.addEventListener('click', () => {
    if (clickTimeout) return;

    clickTimeout = setTimeout(() => {
      hex.classList.toggle('active');  // toggle viola
      clickTimeout = null;
    }, 250);
  });

  hex.addEventListener('dblclick', () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      clickTimeout = null;
    }
    const input = prompt("Inserisci testo per questa sventura:", hex.textContent.trim());
    if (input !== null) {
      let span = hex.querySelector('span');
      if (!span) {
        span = document.createElement('span');
        hex.textContent = '';
        hex.appendChild(span);
      }
      span.textContent = input;
    }
  });
});