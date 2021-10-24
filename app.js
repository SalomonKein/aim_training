const startBtn = document.getElementById("start");
const screens = document.querySelectorAll(".screen");
const timeList = document.getElementById("time-list");
const timer = document.getElementById("time");
const board = document.getElementById("board");
const colors = [
  "#f52727",
  "#7af019",
  "#43eefa",
  "#f72d81",
  "#a35de6",
  "#3281f8",
  "#edff4a",
  "#4aff62",
];
let time = 0;
let score = 0;

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");

    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  let timerForTimer = setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
  setTimeout(() => {
    clearInterval(timerForTimer);
  }, time + 1 + `000`);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timer.innerHTML = `00:${value}`;
}

function finishGame() {
  timer.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Score:<span class="primary">${score}</span></h1> <div id="restart" style="position: absolute; bottom: 20px; font-size: 40px; cursor: pointer">Restart</div>`;
  const restartBtn = document.getElementById("restart");
  restartBtn.addEventListener("click", () => {
    screens[1].classList.remove("up");
    board.innerHTML = "";
    timer.parentNode.classList.remove("hide");
    score = 0;
  });
}

function restartGame() {}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 50);
  const {width, height} = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.background = getRandomColor();
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}



// in this place situated some changes - those must be in origin master
function sum(a, b){
  return a + b
}

sum(2, 7)