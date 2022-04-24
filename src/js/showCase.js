const nbCases = 81;
const withgrid = 9;
const nbMines = 10;
let checker = nbCases - nbMines;

const colorsList = [
  "blue",
  "green",
  "red",
  "purple",
  "orange",
  "brown",
  "grey",
  "black",
];

const sizeblock = 50;

const numberShowed = (nb) => {
  return `<text font-size='${sizeblock}' x='-25%' y='20' fill='${
    colorsList[nb - 1]
  }'>${nb}</text>`;
};

function CasesBeside(n) {
  let cases = [n - withgrid, n + withgrid];
  if (n % withgrid == 1) {
    cases.push(n - withgrid + 1, n + 1, n + withgrid + 1);
  } else if (n % withgrid == 0) {
    cases.push(n - withgrid - 1, n - 1, n + withgrid - 1);
  } else {
    cases.push(
      n - withgrid + 1,
      n + 1,
      n + withgrid + 1,
      n - withgrid - 1,
      n - 1,
      n + withgrid - 1
    );
  }
  return cases;
}

function minesbeside(button, mines) {
  let memo = 0;
  CasesBeside(Number(button)).forEach((element) => {
    if (mines.includes(element.toString())) {
      memo++;
    }
  });
  return memo;
}

function Win() {
  document.body.style.backgroundColor = "green";
}

export function ShowCase(button, mines) {
  let show = document.getElementById(button);
  if (show.classList.contains("showed")) {
  } else {
    checker--;
    if (checker == 0) {
      Win();
    }
    switch (minesbeside(button, mines)) {
      case 0:
        show.innerHTML = "";
        show.classList.add("showed");
        CasesBeside(Number(button)).forEach((element) => {
          if (element > 0 && element <= nbCases) {
            ShowCase(element, mines);
          }
        });
        break;
      case 1:
        show.innerHTML = numberShowed(1);
        show.classList.add("showed");
        break;
      case 2:
        show.innerHTML = numberShowed(2);
        show.classList.add("showed");
        break;
      case 3:
        show.innerHTML = numberShowed(3);
        show.classList.add("showed");
        break;
      case 4:
        show.innerHTML = numberShowed(4);
        show.classList.add("showed");
        break;
      case 5:
        show.innerHTML = numberShowed(5);
        show.classList.add("showed");
        break;
      case 6:
        show.innerHTML = numberShowed(6);
        show.classList.add("showed");
        break;
      case 7:
        show.innerHTML = numberShowed(7);
        show.classList.add("showed");
        break;
      case 8:
        show.innerHTML = numberShowed(8);
        show.classList.add("showed");
        break;
    }
  }
}
