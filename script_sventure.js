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
        alert("Per poter attivare una sventura, devi prima aver inserito un testo. per inserire il testo fai doppio click su un esagono a scelta");
      }      

      clickTimeoutSventura = null;
    }, 250);
  });

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
