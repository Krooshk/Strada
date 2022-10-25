import { numbers, btnClear, backspace, operators, screen, equal } from './view.js';

// '../Calc_ui/view.js'

let hasOperator = false;

let firstNum = 0;
let secondNum;
let operator = "";


numbers.forEach((elem) => elem.addEventListener("click", addSymbols));
btnClear.addEventListener("click", () => {
    screen.innerHTML = "0";
    hasOperator = false;
    operator = "";
});
backspace.addEventListener("click", deleteSymbols);
operators.forEach((operator) => operator.addEventListener("click", addOperator));
equal.addEventListener("click", funcEqual);

function addSymbols() {
    if (screen.innerHTML === "0") {
        screen.innerHTML = this.innerHTML;
    } else { screen.innerHTML += this.innerHTML; }
}

function addOperator() {
    if (!hasOperator) {
        console.log(firstNum);
        firstNum = Number(screen.innerHTML);
        screen.innerHTML += this.innerHTML;
        hasOperator = true;
        operator = (this.classList[1]);
    }
}

function deleteSymbols() {
    let isOperator = isNaN(Number(screen.innerHTML.at(-1)));
    if (isOperator) {
        hasOperator = false;
        operator = "";
    }
    if (screen.innerHTML.length === 1) {
        screen.innerHTML = "0";
    } else {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
    }
}

function funcEqual() {
    let index = screen.innerHTML.split("").findLastIndex((item) => (isNaN(Number(item))));
    if (hasOperator) {
        secondNum = Number(screen.innerHTML.slice(index + 1));
        screen.innerHTML = Calc(operator, firstNum, secondNum);
    }
    hasOperator = false;
}

function Calc(operator, a, b) {
    let operations = {
        "sum": Number(a) + Number(b),
        "sub": Number(a) - Number(b),
        "multi": Number(a) * Number(b),
        "div": Number(a) / Number(b),
    }
    return operations[operator];
}