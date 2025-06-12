document.addEventListener("DOMContentLoaded", () => {
  const resultBox = document.getElementById("sacchettoResult");
  const sacchettoButton = document.getElementById("btnSacchetto");
  const resetButton = document.getElementById("btnResetSacchetto");

  sacchettoButton.addEventListener("click", () => {
    const sacchetto = [];

    const isAdrenalina = document.querySelector('.hex.status:nth-child(1)')?.classList.contains('active');
    const isConfusione = document.querySelector('.hex.status:nth-child(2)')?.classList.contains('active');

    // Tratti attivi
    const trattiAttivi = document.querySelectorAll('.hex:not(.sventura):not(.status).active');
    trattiAttivi.forEach(() => {
      if (isConfusione) {
        const casuale = Math.random() < 0.5 ? "Bianco" : "Nero";
        sacchetto.push(casuale);
      } else {
        sacchetto.push("Bianco");
      }
    });

    // Token bianchi dai contatori
    const tokenBianchi = parseInt(document.getElementById("token-bianchi-count").textContent, 10) || 0;
    for (let i = 0; i < tokenBianchi; i++) {
      sacchetto.push("Bianco");
    }

    // Sventure attive => token neri
    const sventureAttive = document.querySelectorAll('.hex.sventura.active');
    sventureAttive.forEach(() => sacchetto.push("Nero"));

    // Token neri dai contatori
    const tokenNeri = parseInt(document.getElementById("token-neri-count").textContent, 10) || 0;
    for (let i = 0; i < tokenNeri; i++) {
      sacchetto.push("Nero");
    }

    // Token causali (bianco o nero casuale)
    const tokenCausali = parseInt(document.getElementById("token-causali-count").textContent, 10) || 0;
    for (let i = 0; i < tokenCausali; i++) {
      const casuale = Math.random() < 0.5 ? "Bianco" : "Nero";
      sacchetto.push(casuale);
    }

    if (sacchetto.length === 0) {
      alert("Il sacchetto è vuoto. Assicurati di avere tratti o sventure attive o token inseriti.");
      return;
    }

    // Mescola
    for (let i = sacchetto.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sacchetto[i], sacchetto[j]] = [sacchetto[j], sacchetto[i]];
    }

    // Chiedi quanti estrarre
    let drawCount = 0;

    if (isAdrenalina) {
      drawCount = 4;
      alert("Hai lo status di Adrenalina attivo. Devi pescare esattamente 4 token.");
    } else {
      drawCount = prompt(`Ci sono ${sacchetto.length} elementi nel sacchetto. Quanti ne vuoi pescare? (1-4)?`);
      drawCount = parseInt(drawCount, 10);
      if (isNaN(drawCount) || drawCount < 1 || drawCount > 4) {
        alert("Inserisci un numero valido tra 1 e 4.");
        return;
      }
    }

    // Estrai numero richiesto
    const pescati = sacchetto.splice(0, drawCount);
    const rimanenti = sacchetto;

    // Ordina: prima bianchi, poi neri
    const sortTokens = arr =>
      arr.sort((a, b) => {
        if (a === b) return 0;
        return a === "Bianco" ? -1 : 1;
      });

    const pescatiOrdinati = sortTokens(pescati);
    const rimanentiOrdinati = sortTokens(rimanenti);

    const output =
      `Hai pescato:\n- ${pescatiOrdinati.join('\n- ')}\n\nNel sacchetto rimane:\n- ${rimanentiOrdinati.join('\n- ')}`;

    resultBox.textContent = output;
  });

  resetButton.addEventListener("click", () => {
    resultBox.textContent = "";

    // Azzera contatori
    document.getElementById("token-bianchi-count").textContent = "0";
    document.getElementById("token-neri-count").textContent = "0";
    document.getElementById("token-causali-count").textContent = "0";

    // Disattiva tutti gli esagoni
    document.querySelectorAll('.hex.active').forEach(hex => {
      hex.classList.remove('active');
    });

    // Ripristina il testo negli esagoni degli status
    const statusElements = document.querySelectorAll('.hex.status span');
    if (statusElements.length > 0) {
      statusElements[0].textContent = "adrenalina";
      statusElements[1].textContent = "confusione";
    }
});

});
