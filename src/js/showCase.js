import { nbCases, nbMines, colorsList, withGrid, sizeblock } from "./const";

const numberShowed = (nb) => {
    // return `<text font-size='${sizeblock}' x='-25%' y='20' fill='${colorsList[nb - 1]}'>${nb}</text>`;
    return `<div class="number" style="color:${colorsList[nb - 1]};">${nb}</div>`;
};

function CasesBeside(n) {
    let cases = [n - withGrid, n + withGrid];
    if (n % withGrid == 1) {
        cases.push(n - withGrid + 1, n + 1, n + withGrid + 1);
    } else if (n % withGrid == 0) {
        cases.push(n - withGrid - 1, n - 1, n + withGrid - 1);
    } else {
        cases.push(n - withGrid + 1, n + 1, n + withGrid + 1, n - withGrid - 1, n - 1, n + withGrid - 1);
    }
    return cases;
}

function isMinesbeside(button, mines) {
    let memo = 0;
    CasesBeside(Number(button)).forEach((element) => {
        if (mines.includes(element.toString())) {
            memo++;
        }
    });
    return memo;
}

function Win() {
    let winPop = document.querySelector(".win");
    winPop.style.display = "flex";
}

export function ShowCase(button, mines) {
    let show = document.getElementById(button);
    if (show.classList.contains("showed")) {
    } else {
        show.classList.add("showed");
        if (document.querySelectorAll(".showed").length == nbCases - nbMines) {
            Win();
        }
        switch (isMinesbeside(button, mines)) {
            case 0:
                show.innerHTML = "";
                CasesBeside(Number(button)).forEach((element) => {
                    if (element > 0 && element <= nbCases) {
                        ShowCase(element, mines);
                    }
                });
                break;
            case 1:
                show.innerHTML = numberShowed(1);
                break;
            case 2:
                show.innerHTML = numberShowed(2);
                break;
            case 3:
                show.innerHTML = numberShowed(3);
                break;
            case 4:
                show.innerHTML = numberShowed(4);
                break;
            case 5:
                show.innerHTML = numberShowed(5);
                break;
            case 6:
                show.innerHTML = numberShowed(6);
                break;
            case 7:
                show.innerHTML = numberShowed(7);
                break;
            case 8:
                show.innerHTML = numberShowed(8);
                break;
        }
    }
}
