export function add(a, b) {
    return a + b;
}
export function minus(a, b) {
    return a - b;
}
export function multiply(a, b) {
    return a * b;
}
export function divide(a, b) {
    if (b === 0) {
        throw Error("Делить на ноль нельзя")
    }
    return a / b;
}
export default function calc(a, b, oper) {
    switch (oper) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            throw new Error("Неизвестная операция");
    }
}