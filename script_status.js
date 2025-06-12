document.querySelectorAll('.hex.status').forEach(hex => {
  hex.addEventListener('click', () => {
    hex.classList.toggle('active');

    const span = hex.querySelector('span');

    // Identifica lo status iniziale prima di cambiarlo
    const isAdrenalina = span.dataset.original === 'adrenalina' || span.textContent.toLowerCase().includes('adrenalina');
    const isConfusione = span.dataset.original === 'confusione' || span.textContent.toLowerCase().includes('confusione');

    // Salva il testo originale (una sola volta)
    if (!span.dataset.original) {
      span.dataset.original = span.textContent.toLowerCase();
    }

    // Applica o ripristina il testo
    if (hex.classList.contains('active')) {
      if (isAdrenalina) {
        span.textContent = "la prossima prova\ndevi pescare 4";
      }
      if (isConfusione) {
        span.textContent = "nella prossima prova\n i tratti sono casuali \n non bianchi";
      }
    } else {
      span.textContent = span.dataset.original;
    }
  });
});
