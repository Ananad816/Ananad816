const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            if (firstOperand !== null && operator) {
                currentInput = String(eval(firstOperand + operator + currentInput));
                display.value = currentInput;
                firstOperand = null;
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(button.textContent)) {
            if (currentInput) {
                firstOperand = currentInput;
                operator = button.textContent;
                currentInput = '';
            }
        } else {
            currentInput += button.textContent;
            display.value = currentInput;
        }
    });
});
