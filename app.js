let bloqueado = false;
let historico = [];

document.getElementById("gerar").addEventListener("click", () => {
  if (bloqueado) return;
  const multiplos = ["1.45x", "1.60x", "1.75x", "2.00x"];
  const chanceAlta = Math.random() < 0.85;
  const entrada = chanceAlta
    ? `Entrar até ${multiplos[0]}`
    : `Entrar até ${multiplos[Math.floor(Math.random() * multiplos.length)]}`;
  document.getElementById("sinal").innerText = entrada;
  historico.unshift(`${new Date().toLocaleTimeString()} — ${entrada}`);
  if (historico.length > 10) historico.pop();
  document.getElementById("historico").innerHTML = historico
    .map((h) => `<div>${h}</div>`)
    .join("");
  bloqueado = true;
  setTimeout(() => (bloqueado = false), 15000);
});
