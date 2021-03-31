const sizeblock = 50;
const set1 = "<text font-size='" + sizeblock + "' x='-25%' y='20' fill='blue'>1</text>";
const set2 = "<text font-size='" + sizeblock + "' x='-25%' y='20' fill='green'>2</text>";
const set3 = "<text font-size='" + sizeblock + "' x='-25%' y='20' fill='red'>3</text>";
const set4 = "<text font-size='" + sizeblock + "' x='-25%' y='20' fill='purple'>4</text>";
const set5 = "<text font-size='" + sizeblock + "' x='-25%' y='20' fill='orange'>5</text>";
const set6 = "<text font-size='" + sizeblock + "' x='-25%' y='20' fill='brown'>6</text>";
const set7 = "<text font-size='" + sizeblock + "' x='-25%' y='20' fill='grey'>7</text>";
const set8 = "<text font-size='" + sizeblock + "' x='-25%' y='20' fill='black'>8</text>";

const svgMine = "<circle cx='0' cy='0' r='20' fill='black' /><ellipse cx='0' cy='0' rx='25' ry='2.5' /><circle cx='0' cy='0' r='2' fill='white' /><polygon points='-2.5 -10, 2.5 -14, 0 -24' fill='white' stroke='black' stroke-width='1' stroke-linejoin='round' /><polygon points='-2.5 -14, 2.5 -14, 0 -24' fill='white' stroke='black' stroke-width='1' stroke-linejoin='round' transform='rotate(45)' /><polygon points='-2.5 -14, 2.5 -14, 0 -24' fill='white' stroke='black' stroke-width='1' stroke-linejoin='round' transform='rotate(-45)' /><polygon points='-2.5 -14, 2.5 -14, 0 -24' fill='white' stroke='black' stroke-width='1' stroke-linejoin='round' transform='rotate(180)' /><polygon points='-2.5 -14, 2.5 -14, 0 -24' fill='white' stroke='black' stroke-width='1' stroke-linejoin='round' transform='rotate(225)' /><polygon points='-2.5 -14, 2.5 -14, 0 -24' fill='white' stroke='black' stroke-width='1' stroke-linejoin='round' transform='rotate(135)' />";

const nbCases = 81;
const withgrid = 9;
const nbMines = 10;
let checker = nbCases - nbMines;

let grid = document.querySelector(".game");

var mines = InsertMines();

for (let i = 1; i <= nbCases; i++) {//insertion des cases
  let button = "<svg id=" + i + " class='button' viewBox='-25 -25 50 50'></svg>";
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
      GameOver(mines);
    } else if (button.classList.contains("showed")) {
      console.log("ever checked");
    } else {
      ShowCase(button.id, mines);
      if (checker == 0) {
        Win();
      }
    }
  });
});

function Win() {
  document.body.style.backgroundColor = "green";
}

function GameOver(mines) {
  document.body.style.backgroundColor = "red";
  mines.forEach(element => {
    let show = document.getElementById(element);
    show.innerHTML = svgMine;
    console.log(element);
  });
}

function ShowCase(button, mines) {
  let show = document.getElementById(button);
  if (show.classList.contains("showed")) {
    //console.log("ever checked");
  } else {
    checker--;
    //console.log(checker);
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