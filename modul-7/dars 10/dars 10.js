import calc, { add, minus, multiply, divide } from './math.js';

const modeb = document.getElementById("mode");

function showb(event) {
    const id = event.target.dataset.value;
    console.log(id);
}

function apmode() {
    const curm = localStorage.getItem("mode") || "light";
    document.body.classList.toggle("dark", curm === "dark");
    modeb.textContent = curm === "dark" ? "Light Mode" : "Dark Mode";
}

function tmode() {
    const nmode = (localStorage.getItem("mode") || "light") === "light" ? "dark" : "light";
    localStorage.setItem("mode", nmode);
    apmode();
}

modeb.addEventListener("click", tmode);

const input = document.getElementById("inp");
const buttons = document.querySelectorAll(".opt");

let current = "";
let prev = "";
let coper = null;

buttons.forEach(button => {
    button.addEventListener("click", butc);
})

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("equal").addEventListener("click", calcul);

function butc(e) {
    const value = e.target.dataset.value;
    const v = e.target.textContent;

    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (current === '') return; // предотвращаем ввод оператора без числа
        if (prev !== '') calcul(); // если есть предыдущее значение, вычисляем
        coper = value;
        prev = current;
        current = '';
        input.value = prev + v;
    } else {
        current += value;
        input.value = current;
    }
}

function clear() {
      current = '';
      prev = '';
      coper = null;
      input.value = '';
    }

function calcul() {
    if (prev === '' || current === '') return;
    const num1 = parseFloat(prev);
    const num2 = parseFloat(current);

    let result;
    switch (coper) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = minus(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            return;
    }

    input.value = result;
    current = result.toString();
    prev = '';
    coper = null;
}

apmode();