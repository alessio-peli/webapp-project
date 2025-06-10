// Gestione sventure (colonna destra)
let clickTimeoutSventura = null;

document.querySelectorAll('.hex.sventura').forEach(hex => {
  hex.addEventListener('click', () => {
    if (clickTimeoutSventura) return;

    clickTimeoutSventura = setTimeout(() => {
      const span = hex.querySelector('span');
      const hasText = span && span.textContent.trim() !== "";

      if (hasText) {
        hex.classList.toggle('active');
      } else {
        hex.classList.remove('active'); // Disattiva se non c'è più testo
        alert("Per poter attivare una sventura, devi prima aver inserito un testo. Per inserirlo, fai doppio click su un esagono.");
      }

      clickTimeoutSventura = null;
    }, 250);
  });

  hex.addEventListener('dblclick', () => {
    clearTimeout(clickTimeoutSventura);
    clickTimeoutSventura = null;

    const input = prompt("Inserisci un testo per questa sventura:");
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
