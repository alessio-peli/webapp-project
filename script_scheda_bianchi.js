// Variabile per evitare sovrapposizione tra click e doppio click per le sventure
let clickTimeoutSventura = null;

document.querySelectorAll('.hex.sventura').forEach(hex => {
  // Singolo click: attiva/disattiva classe 'active' con colore viola
  hex.addEventListener('click', () => {
    if (clickTimeoutSventura) return;

    clickTimeoutSventura = setTimeout(() => {
      hex.classList.toggle('active');
      clickTimeoutSventura = null;
    }, 250);
  });

  // Doppio click: modifica testo all'interno dell'esagono
  hex.addEventListener('dblclick', () => {
    clearTimeout(clickTimeoutSventura);
    clickTimeoutSventura = null;

    const input = prompt("Inserisci un testo per questa sventura:");
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
