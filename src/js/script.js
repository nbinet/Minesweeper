const widthGrid = 9;
const heigthGrid = 9;
const nbCases = widthGrid * heigthGrid;
const nbMines = 10;

createGrid(widthGrid, heigthGrid);
let mines = placeMines(nbMines, nbCases);
console.log(mines);
buttonPressed(mines);





function createGrid (widthGrid, heigthGrid) {
  let grid = document.querySelector(".game");
  let index = 1;
  for (let y = 1; y <= heigthGrid; y++) {
    for (let x = 1; x <= widthGrid; x++, index++) {
      grid.insertAdjacentHTML("beforeend",
        "<svg id=" + index + " data-x=" + x + " data-y=" + y + " class='button'><rect width='25' height='25' fill='grey'></rect></svg>"
      );
    }
  }
}

function placeMines(nbMines, nbCases) {
  let memo = [];
  for (let i = 0; i < nbMines; i++) {
    let n = Math.ceil(Math.random() * nbCases).toString();
    while (memo.includes(n)) {
      n = Math.ceil(Math.random() * nbCases).toString();
    }
    memo.push(n);
  }
  memo.forEach(element => {
    n = document.getElementById(element);
    n.addEventListener("click", function() {
      console.log("GAME OVER"); // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ GAME OVER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    });
  });
  return memo;
}

function buttonPressed(mines) {
  let buttons = document.querySelectorAll(".button");
  buttons.forEach(element => {
    element.addEventListener("click", function() {
      console.log(element);
      switch (caseValue()) {
        case 1: element.insertAdjacentHTML() break;
        case 2: break;
        case 3: break;
        case 4: break; // continue here
        case 5: break;
        case 6: break;
        case 7: break;
        case 8: break;
        default:
          break;
      }
    })
  });
}