let coins = 1000;
const wheel = document.getElementById("wheel");
const message = document.getElementById("message");
const coinDisplay = document.getElementById("coins");

function spinWheel() {
  if (coins < 100) {
    message.textContent = "No tienes suficientes monedas.";
    return;
  }

  const bet = document.getElementById("betOption").value;
  coins -= 100;
  coinDisplay.textContent = coins;

  const sectors = 12; // total "falsos" sectores
  const sectorAngle = 360 / sectors;
  const resultIndex = Math.floor(Math.random() * sectors);
  const resultAngle = resultIndex * sectorAngle;
  const totalRotation = 360 * 6 + (360 - resultAngle); // 6 vueltas + caer en el resultado

  wheel.style.transform = `rotate(${totalRotation}deg)`;

  // Determinar color por índice (simple para demo)
  let color = "black";
  if (resultIndex === 10) color = "green";
  else if (resultIndex % 2 === 0) color = "red";

  setTimeout(() => {
    let outcome = `La ruleta cayó en ${color.toUpperCase()}. `;
    if (bet === color) {
      const prize = color === "green" ? 1400 : 200;
      coins += prize;
      outcome += `¡Ganaste ${prize} monedas! 🎉`;
    } else {
      outcome += "Perdiste 😢";
    }
    coinDisplay.textContent = coins;
    message.textContent = outcome;
  }, 4000); // Espera a que la rueda "gire"
}
