import { ShowCase } from "./showCase";
import { svgMine } from "./ressources";
import { nbCases, nbMines } from "./const";

let grid = document.querySelector(".game");

let mines = InsertMines();

const gridGenerator = () => {
    for (let i = 1; i <= nbCases; i++) {
        let block = "<div id=" + i + " class='block'></div>";
        grid.insertAdjacentHTML("beforeend", block);
    }
};

gridGenerator();

var blocks = document.querySelectorAll(".block");

const restart = () => {
    let blocksToRestart = document.querySelectorAll(".showed");
    blocksToRestart.forEach((element) => {
        element.innerHTML = "";
        element.classList.remove("showed");
    });
    mines.forEach((element) => {
        let mine = document.getElementById(element);
        mine.innerHTML = "";
    });
    mines = InsertMines();
    document.body.style.backgroundColor = "white";
};

let restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", function () {
    restart();
});

blocks.forEach((block) => {
    block.addEventListener("click", function () {
        if (mines.includes(block.id)) {
            GameOver(mines);
        } else if (!block.classList.contains("showed")) {
            ShowCase(block.id, mines);
        }
    });
});

function GameOver(mines) {
    document.body.style.backgroundColor = "red";
    mines.forEach((element) => {
        let show = document.getElementById(element);
        show.innerHTML = svgMine;
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
