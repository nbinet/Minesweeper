const set1 = "<text font-size='25' x='0' y='25' fill='blue'>1</text>";
const set2 = "<text font-size='25' x='0' y='25' fill='green'>2</text>";
const set3 = "<text font-size='25' x='0' y='25' fill='red'>3</text>";
const set4 = "<text font-size='25' x='0' y='25' fill='purple'>4</text>";
const set5 = "<text font-size='25' x='0' y='25' fill='orange'>5</text>";
const set6 = "<text font-size='25' x='0' y='25' fill='brown'>6</text>";
const set7 = "<text font-size='25' x='0' y='25' fill='grey'>7</text>";
const set8 = "<text font-size='25' x='0' y='25' fill='black'>8</text>";

let grid = document.querySelector(".game");
let mines = InsertMines();

for (let i = 1; i <= 81; i++) {
  let button = "<svg id=" + i + " class='button'><rect width='25' height='25' fill='grey'></rect></svg>";
  grid.insertAdjacentHTML("beforeend", button);
}

var buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    if (mines.includes(button.id)) {
      GameOver();
    } else {
      ShowCase(button.id);
    }
  });
});

function GameOver() {
  console.log("failed");
}

function ShowCase(i) {
  let show = document.getElementById(i);
  switch (minesbeside(i)) {
    case '0': show.innerHTML = "";
    break;
    case '1': show.innerHTML = set1;
    break;
    case '2': show.innerHTML = set2;
    break;
    case '3': show.innerHTML = set3;
    break;
    case '4': show.innerHTML = set4;
    break;
    case '5': show.innerHTML = set5;
    break;
    case '6': show.innerHTML = set6;
    break;
    case '7': show.innerHTML = set7;
    break;
    case '8': show.innerHTML = set8;
    break;
  }
}

function minesbeside(n) {
  return "4";
}

function InsertMines () {
  let memo = [];
  for (i = 0; i < 10; i++) {
    let n = Math.ceil(Math.random() * 81).toString();
    memo.push(n);
  }
  console.log(memo);
  return memo;
}