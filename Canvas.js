const canvas = document.getElementById('diceCanvas');
const ctx = canvas.getContext('2d');
const dicesize = 100;

function Dice(number) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  switch (number) {
    case 1:
      Yashu(canvas.width / 2, canvas.height / 2);
      break;
    case 2:
      Yashu(canvas.width / 4, canvas.height / 4);
      Yashu(canvas.width * 3 / 4, canvas.height * 3 / 4);
      break;
    case 3:
      Yashu(canvas.width / 4, canvas.height / 4);
      Yashu(canvas.width / 2, canvas.height / 2);
      Yashu(canvas.width * 3 / 4, canvas.height * 3 / 4);
      break;
    case 4:
      Yashu(canvas.width / 4, canvas.height / 4);
      Yashu(canvas.width * 3 / 4, canvas.height / 4);
      Yashu(canvas.width / 4, canvas.height * 3 / 4);
      Yashu(canvas.width * 3 / 4, canvas.height * 3 / 4);
      break;
    case 5:
      Yashu(canvas.width / 4, canvas.height / 4);
      Yashu(canvas.width * 3 / 4, canvas.height / 4);
      Yashu(canvas.width / 4, canvas.height * 3 / 4);
      Yashu(canvas.width * 3 / 4, canvas.height * 3 / 4);
      Yashu(canvas.width / 2, canvas.height / 2);
      break;
    case 6:
      Yashu(canvas.width / 4, canvas.height / 4);
      Yashu(canvas.width * 3 / 4, canvas.height / 4);
      Yashu(canvas.width / 4, canvas.height * 3 / 4);
      Yashu(canvas.width * 3 / 4, canvas.height * 3 / 4);
      Yashu(canvas.width / 4, canvas.height / 2);
      Yashu(canvas.width * 3 / 4, canvas.height / 2);
      break;
    default:
      break;
  }

  // Update the rolled number below the canvas
  document.getElementById('rolledNumber').innerText = `Rolled Number: ${number}`;
}

function Yashu(x, y) {
  const dotSize = 10;
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(x, y, dotSize, 0, Math.PI * 2);
  ctx.fill();
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

Dice(6);

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    const randomNumber = rollDice();
    Dice(randomNumber);
  }
});
