const sizeblock = 50;
const set1 = "<text font-size='" + sizeblock + "' x='25%' y='90%' fill='blue'>1</text>";
const set2 = "<text font-size='" + sizeblock + "' x='25%' y='90%' fill='green'>2</text>";
const set3 = "<text font-size='" + sizeblock + "' x='25%' y='90%' fill='red'>3</text>";
const set4 = "<text font-size='" + sizeblock + "' x='25%' y='90%' fill='purple'>4</text>";
const set5 = "<text font-size='" + sizeblock + "' x='25%' y='90%' fill='orange'>5</text>";
const set6 = "<text font-size='" + sizeblock + "' x='25%' y='90%' fill='brown'>6</text>";
const set7 = "<text font-size='" + sizeblock + "' x='25%' y='90%' fill='grey'>7</text>";
const set8 = "<text font-size='" + sizeblock + "' x='25%' y='90%' fill='black'>8</text>";
const nbCases = 81;
const withgrid = 9;
const nbMines = 10;

let grid = document.querySelector(".game");

var mines = InsertMines();

for (let i = 1; i <= nbCases; i++) {
  let button = "<svg id=" + i + " class='button'><rect width='" + sizeblock + "' height='" + sizeblock + "' fill='grey'></rect></svg>";
  grid.insertAdjacentHTML("beforeend", button);
}

var buttons = document.querySelectorAll(".button");

let restart = document.querySelector(".restart");
restart.addEventListener("click", function () {
  location.reload();
})

buttons.forEach(button => {
  button.addEventListener("click", function () {
    if (mines.includes(button.id)) {
      GameOver();
    } else if (button.classList.contains("showed")) {
      console.log("ever checked");
    } else {
      ShowCase(button.id, mines);
    }
  });
});

function GameOver() {
  let end = document.querySelector(".gameover");
  end.style.display = "block";
}

function ShowCase(button, mines) {
  let show = document.getElementById(button);
  if (show.classList.contains("showed")) {
    console.log("ever checked");
  } else {
    switch (minesbeside(button, mines)) {
      case 0: 
        show.innerHTML = "";
        show.classList.add("showed");
        CasesBeside(Number(button)).forEach(element => {
          if (element > 0 && element <= nbCases) {
            ShowCase(element, mines);
          }
        });
        break;
      case 1: show.innerHTML = set1;
      show.classList.add("showed"); break;
      case 2: show.innerHTML = set2;
      show.classList.add("showed"); break;
      case 3: show.innerHTML = set3;
      show.classList.add("showed"); break;
      case 4: show.innerHTML = set4;
      show.classList.add("showed"); break;
      case 5: show.innerHTML = set5;
      show.classList.add("showed"); break;
      case 6: show.innerHTML = set6;
      show.classList.add("showed"); break;
      case 7: show.innerHTML = set7;
      show.classList.add("showed"); break;
      case 8: show.innerHTML = set8;
      show.classList.add("showed"); break;
    }
  }
}

function CasesBeside(n) {
  let cases = [n - withgrid, n + withgrid];
  if (n % withgrid == 1) {
    cases.push(n - withgrid + 1, n + 1, n + withgrid + 1);
  } else if (n % withgrid == 0) {
    cases.push(n - withgrid - 1, n - 1, n + withgrid - 1);
  } else {
    cases.push (n - withgrid + 1, n + 1, n + withgrid + 1, n - withgrid - 1, n - 1, n + withgrid - 1);
  }
  return cases;
}

function minesbeside(button, mines) {
  let memo = 0;
  CasesBeside(Number(button)).forEach(element => {
    if (mines.includes(element.toString())) {
      memo++;
    }
  });
  return memo;
}

function InsertMines () {
  let memo = [];
  for (let i = 0; i < nbMines; i++) {
    let n = Math.ceil(Math.random() * nbCases).toString();
    while (memo.includes(n)) {
      n = Math.ceil(Math.random() * nbCases).toString();
    }
    memo.push(n);
  }
  return memo;
}