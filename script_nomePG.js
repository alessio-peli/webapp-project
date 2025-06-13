document.getElementById("btnNomePersonaggio").addEventListener("click", () => {
  const nome = prompt("Inserisci il nome del personaggio:");
  if (nome) document.getElementById("nomePersonaggio").textContent = nome;
});
