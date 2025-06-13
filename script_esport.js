function esportaEsagoni() {
  const data = [];
  const gridHex = document.querySelectorAll('.tratti-container .hex');
  const sventureHex = document.querySelectorAll('.hex.sventura');
  const nome = document.getElementById("nomePersonaggio").textContent;

  gridHex.forEach((hex, index) => {
    const span = hex.querySelector('span');
    const text = span ? span.textContent.trim() : '';
    let categoria = 'abilità';
    if (index === 9) categoria = 'archetipo';
    else if ([4, 8, 10, 13, 14, 15].includes(index)) categoria = 'qualità';
    if (text) data.push({ index, text, tipo: categoria });
  });

  sventureHex.forEach((hex, index) => {
    const span = hex.querySelector('span');
    const text = span ? span.textContent.trim() : '';
    if (text) data.push({ index, text, tipo: 'sventura' });
  });

  const blob = new Blob([JSON.stringify({ nome, dati: data }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'scheda_nte.json';
  a.click();
  URL.revokeObjectURL(url);
}
