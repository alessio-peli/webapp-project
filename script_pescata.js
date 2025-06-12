document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnSacchetto").addEventListener("click", () => {
    const sacchetto = [];

    // Tratti attivi + token bianchi
    const trattiAttivi = Array.from(document.querySelectorAll('.hex:not(.sventura):not(.status).active'));
    const tokenBianchi = parseInt(document.getElementById("token-bianchi-count").textContent, 10) || 0;
    trattiAttivi.forEach(tratto => {
      const text = tratto.querySelector('span')?.textContent.trim();
      if (text) sacchetto.push(text);
    });
    for (let i = 0; i < tokenBianchi; i++) {
      sacchetto.push("Token Bianco");
    }

    // Sventure attive + token neri
    const sventureAttive = Array.from(document.querySelectorAll('.hex.sventura.active'));
    const tokenNeri = parseInt(document.getElementById("token-neri-count").textContent, 10) || 0;
    sventureAttive.forEach(sventura => {
      const text = sventura.querySelector('span')?.textContent.trim();
      if (text) sacchetto.push(text);
    });
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

    // Pesca
    let drawCount = prompt(`Ci sono ${sacchetto.length} elementi nel sacchetto. Quanti ne vuoi pescare? (1-4)?`);
    drawCount = parseInt(drawCount, 10);
    if (isNaN(drawCount) || drawCount < 1 || drawCount > 4) {
      alert("Inserisci un numero valido tra 1 e 4.");
      return;
    }

    const pescati = sacchetto.slice(0, drawCount);
    const rimanenti = sacchetto.slice(drawCount);

    const output = 
      `🎯 Hai pescato:\n- ${pescati.join('\n- ')}\n\n🧩 Nel sacchetto rimane:\n- ${rimanenti.join('\n- ')}`;
    
    document.getElementById("sacchettoResult").textContent = output;
  });
});
