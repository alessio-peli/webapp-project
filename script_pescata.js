document.addEventListener("DOMContentLoaded", () => {
  const resultBox = document.getElementById("sacchettoResult");
  const sacchettoButton = document.getElementById("btnSacchetto");
  const resetButton = document.getElementById("btnResetSacchetto");

  sacchettoButton.addEventListener("click", () => {
    const sacchetto = [];

    // Tratti attivi => token bianchi
    const trattiAttivi = document.querySelectorAll('.hex:not(.sventura):not(.status).active');
    trattiAttivi.forEach(() => sacchetto.push("Token Bianco"));

    // Token bianchi dai contatori
    const tokenBianchi = parseInt(document.getElementById("token-bianchi-count").textContent, 10) || 0;
    for (let i = 0; i < tokenBianchi; i++) {
      sacchetto.push("Token Bianco");
    }

    // Sventure attive => token neri
    const sventureAttive = document.querySelectorAll('.hex.sventura.active');
    sventureAttive.forEach(() => sacchetto.push("Token Nero"));

    // Token neri dai contatori
    const tokenNeri = parseInt(document.getElementById("token-neri-count").textContent, 10) || 0;
    for (let i = 0; i < tokenNeri; i++) {
      sacchetto.push("Token Nero");
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
    let drawCount = prompt(`Ci sono ${sacchetto.length} elementi nel sacchetto. Quanti ne vuoi pescare? (1-4)?`);
    drawCount = parseInt(drawCount, 10);
    if (isNaN(drawCount) || drawCount < 1 || drawCount > 4) {
      alert("Inserisci un numero valido tra 1 e 4.");
      return;
    }

    // Estrai numero richiesto
    const pescati = sacchetto.splice(0, drawCount);
    const rimanenti = sacchetto;

    // Ordina: prima bianchi, poi neri
    const sortTokens = arr =>
      arr.sort((a, b) => {
        if (a === b) return 0;
        return a === "Token Bianco" ? -1 : 1;
      });

    const pescatiOrdinati = sortTokens(pescati);
    const rimanentiOrdinati = sortTokens(rimanenti);

    const output = 
      ` Hai pescato:\n- ${pescatiOrdinati.join('\n- ')}\n\n Nel sacchetto rimane:\n- ${rimanentiOrdinati.join('\n- ')}`;
    
    resultBox.textContent = output;
  });

  resetButton.addEventListener("click", () => {
    resultBox.textContent = "";
  });
});
