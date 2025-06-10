// Gestione tratti (griglia centrale)
let clickTimeoutTratto = null;

document.querySelectorAll('.hex:not(.sventura):not(.status)').forEach(hex => {
  hex.addEventListener('click', () => {
    if (clickTimeoutTratto) return;

    clickTimeoutTratto = setTimeout(() => {
      const span = hex.querySelector('span');
      const hasText = span && span.textContent.trim() !== "";

      if (hasText) {
        hex.classList.toggle('active');
      } else {
        hex.classList.remove('active'); // Disattiva se non c'è più testo
        alert("Per poter attivare un tratto, devi prima aver inserito un testo. Per inserirlo, fai doppio click su un esagono.");
      }

      clickTimeoutTratto = null;
    }, 250);
  });

  hex.addEventListener('dblclick', () => {
    clearTimeout(clickTimeoutTratto);
    clickTimeoutTratto = null;

    const input = prompt("Inserisci un testo per questo tratto:");
    let span = hex.querySelector('span');

    if (!span) {
      span = document.createElement('span');
      hex.appendChild(span);
    }

    if (input !== null) {
      span.textContent = input;
    }

    // Rimuove "active" se il testo viene cancellato
    if (span.textContent.trim() === "") {
      hex.classList.remove('active');
    }
  });
});
