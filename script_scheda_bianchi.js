// Gestione click singolo su tratti (griglia centrale)
let clickTimeoutTratto = null;

document.querySelectorAll('.hex:not(.sventura):not(.status)').forEach(hex => {
  hex.addEventListener('click', () => {
    if (clickTimeoutTratto) return;

    clickTimeoutTratto = setTimeout(() => {
      const span = hex.querySelector('span');
      const hasText = span && span.textContent.trim() !== "";

      if (hasText) {
        hex.classList.toggle('active');
      }

      clickTimeoutTratto = null;
    }, 250);
  });

  hex.addEventListener('dblclick', () => {
    clearTimeout(clickTimeoutTratto);
    clickTimeoutTratto = null;

    const input = prompt("Inserisci un testo per questo tratto:");
    if (input !== null) {
      let span = hex.querySelector('span');
      if (!span) {
        span = document.createElement('span');
        hex.appendChild(span);
      }
      span.textContent = input;
    }
  });
});
