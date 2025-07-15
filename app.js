let bloqueado = false;
let historico = [];
let ultimosValores = [];

document.getElementById("gerar").addEventListener("click", () => {
  if (bloqueado) return;

  let entrada;

  const ultimosBaixos = ultimosValores.slice(0, 3).every((v) => v <= 1.60);
  const ultimosAltos = ultimosValores.slice(0, 3).every((v) => v > 2.00);

  if (ultimosBaixos) {
    // Se os 3 últimos foram baixos, gera acima de 2.00x até 5.00x
    entrada = (Math.random() * (5.00 - 2.01) + 2.01).toFixed(2);
  } else if (ultimosAltos) {
    // Se os 3 últimos foram altos, gera baixo entre 1.10x e 1.60x
    entrada = (Math.random() * (1.60 - 1.10) + 1.10).toFixed(2);
  } else {
    // Normal — chance de 85% para baixo ou 15% para alto
    const chanceAlta = Math.random() < 0.85;
    entrada = chanceAlta
      ? (Math.random() * (1.60 - 1.10) + 1.10).toFixed(2)
      : (Math.random() * (5.00 - 2.01) + 2.01).toFixed(2);
  }

  ultimosValores.unshift(parseFloat(entrada));
  if (ultimosValores.length > 10) ultimosValores.pop();

  document.getElementById("sinal").innerText = `Sacar até ${entrada}x`;
  historico.unshift(`${new Date().toLocaleTimeString()} — Sacar até ${entrada}x`);
  if (historico.length > 10) historico.pop();
  document.getElementById("historico").innerHTML = historico
    .map((h) => `<div>${h}</div>`)
    .join("");

  bloqueado = true;
  setTimeout(() => (bloqueado = false), 15000);
});
