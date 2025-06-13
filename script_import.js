function importaEsagoni(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const json = JSON.parse(e.target.result);
    const gridHex = document.querySelectorAll('.tratti-container .hex');
    const sventureHex = document.querySelectorAll('.hex.sventura');
    document.getElementById("nomePersonaggio").textContent = json.nome;

    json.dati.forEach(item => {
      const hex = item.tipo === 'sventura' ? sventureHex[item.index] : gridHex[item.index];
      if (hex) {
        let span = hex.querySelector('span');
        if (!span) {
          span = document.createElement('span');
          hex.appendChild(span);
        }
        span.textContent = item.text;
      }
    });
  };
  reader.readAsText(file);
}
  document.getElementById('importFile').addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      importaEsagoni(e.target.files[0]);
    }
  });