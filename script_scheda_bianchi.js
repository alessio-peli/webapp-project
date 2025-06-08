// variabile per evitare sovrapposizione tra click e doppio click 
let clickTimeout = null;

document.querySelectorAll('.hex').forEach(hex => {
  // Singolo click: attiva/disattiva
  hex.addEventListener('click', () => {
    //attesa per vedere se è singolo o doppio click
    if (clickTimeout) return;
    //timeout per eseguire il click dopo un breve ritardo
    clickTimeout = setTimeout(() => {
        hex.classList.toggle('active');
        clickTimeout = null; // resetta
    }, 250);
  });

  // Doppio click per testo
  hex.addEventListener('dblclick', () => {
    // se rilevato un timeout per click singolo lo annulliamo
    clearTimeout(clickTimeout);
    clickTimeout = null;

  // inserimento testo con input
  const input = prompt("Inserisci un testo per questo esagono:");
  if (input !== null) {
        // Cerca un elemento di <span> nella casella e se non lo trova lo crea
      let span = hex.querySelector('span');
      if (!span) {
        span = document.createElement('span');
        hex.appendChild(span);
      }
      span.textContent = input;
    }
  });
});
