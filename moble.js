let coins = 0;


let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("Welcome to the Button Clicker 1.1!!! Press Click me to Click the button!").textContent =
        "Button Clicked times: " + numButtonClicks;
}
function resetCount() {
  count = 0;
  document.getElementById("count").innerText = count;
}




const countEl = document.getElementById("count");
countEl.classList.remove("flash");
void countEl.offsetWidth; // reset animation
countEl.classList.add("flash");









function increaseCount() {
  count++;
  document.getElementById("count").innerText = count;

  if (count > highScore) {
    highScore = count;
    document.getElementById("highScore").innerText = highScore;
    localStorage.setItem("highScore", highScore);
  }
}



let count = 0;
let highScore = 0;

function increaseCount() {
  count++;
  document.getElementById("count").innerText = count;

  if (count > highScore) {
    highScore = count;
    document.getElementById("highScore").innerText = highScore;
  }
}

function resetCount() {
  count = 0;
  document.getElementById("count").innerText = count;
}
function decreaseCount() {
  if (count > 0) {
    count--;
    document.getElementById("count").innerText = count;
  }
}





function animateCount() {
  const countEl = document.getElementById("count");
  countEl.classList.add("bounce");
  setTimeout(() => countEl.classList.remove("bounce"), 200);
}



const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function shootConfetti() {
  const confettis = Array.from({ length: 100 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    c: `hsl(${Math.random() * 360}, 100%, 50%)`,
    v: Math.random() * 3 + 2
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y += p.v, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.fill();
    });
    frame++;
    if (frame < 80) requestAnimationFrame(draw);
  }
  draw();
}


function buyUpgrade() {
  if (coins >= 10) {
    coins -= 10;
    gainPerClick += 1;
    document.getElementById("coins").innerText = `Coins: ${coins}`;
    logAction("🛒 Bought upgrade: +" + gainPerClick + " per click");
    alert("Upgrade purchased! Now each click gives +" + gainPerClick);
  } else {
    alert("Not enough coins!");
  }
}




function increaseCount() {
  count += gainPerClick;
  coins += 1; // <--- Add this line to increase coins
  document.getElementById("count").innerText = count;
  document.getElementById("coins").innerText = "Coins: " + coins; // Update the display
}