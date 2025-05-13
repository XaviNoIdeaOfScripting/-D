let coins = 1000;
const symbols = ["🍒", "🍋", "🍊", "⭐", "💎"];

function spin() {
  if (coins < 100) {
    document.getElementById("message").textContent = "No tienes suficientes monedas.";
    return;
  }

  coins -= 100;
  document.getElementById("coins").textContent = coins;

  const slot1 = symbols[Math.floor(Math.random() * symbols.length)];
  const slot2 = symbols[Math.floor(Math.random() * symbols.length)];
  const slot3 = symbols[Math.floor(Math.random() * symbols.length)];

  document.getElementById("slot1").textContent = slot1;
  document.getElementById("slot2").textContent = slot2;
  document.getElementById("slot3").textContent = slot3;

  let message = "¡Sigue intentando!";

  if (slot1 === slot2 && slot2 === slot3) {
    let reward = 0;
    switch (slot1) {
      case "🍒": reward = 200; break;
      case "🍋": reward = 300; break;
      case "🍊": reward = 400; break;
      case "⭐": reward = 700; break;
      case "💎": reward = 1000; break;
    }
    coins += reward;
    message = `¡Ganaste ${reward} monedas! 🎉`;
  }

  document.getElementById("coins").textContent = coins;
  document.getElementById("message").textContent = message;
}
