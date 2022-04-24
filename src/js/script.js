import { ShowCase } from "./showCase";
import { svgMine } from "./ressources";

const nbCases = 81;
const withgrid = 9;
const nbMines = 10;
let checker = nbCases - nbMines;

let grid = document.querySelector(".game");

let mines = InsertMines();

const removeCases = (cases) => {
  cases.forEach((element) => {
    element.remove();
  });
};

const gridGenerator = () => {
  for (let i = 1; i <= nbCases; i++) {
    let block =
      "<svg id=" + i + " class='block' viewBox='-25 -25 50 50'></svg>";
    grid.insertAdjacentHTML("beforeend", block);
  }
};

gridGenerator();

var blocks = document.querySelectorAll(".block");

let reload = document.querySelector(".reload");
reload.addEventListener("click", function () {
  location.reload();
});

const restart = () => {
  let blocksToRestart = document.querySelectorAll(".showed");
  console.log("nb of blocks to restart :", blocksToRestart.length);
};

let restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", function () {
  restart();
});

blocks.forEach((block) => {
  block.addEventListener("click", function () {
    if (mines.includes(block.id)) {
      GameOver(mines);
    } else if (block.classList.contains("showed")) {
      console.log("ever checked");
    } else {
      ShowCase(block.id, mines);
    }
  });
});

function GameOver(mines) {
  document.body.style.backgroundColor = "red";
  mines.forEach((element) => {
    let show = document.getElementById(element);
    show.innerHTML = svgMine;
    console.log(element);
  });
}

function InsertMines() {
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
