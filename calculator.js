// OPERATORS
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
  if (operator == '+') {
    return add(a, b);
  } else if (operator == '-') {
    return subtract(a, b);
  } else if (operator == '*') {
    return multiply(a, b);
  } else if (operator == '/') {
    return divide(a, b);
  } else return 'invalid';
}

console.log(operate('x', 3, 2));

// FUNCTION
const keys = document.querySelector('.keys');
const clearBtn = document.querySelector('.key-clear');
const equalsBtn = document.querySelector('.key-equals');
const displayCurr = document.querySelector('.display-current');
const displayHist = document.querySelector('.display-history');

let input = '';
let firstInput = 0;
let operator = '';
let secondInput = 0;
let result = 0;

keys.addEventListener('click', (e) => {
  if (e.target.matches('.key-number')) {
    input += e.target.dataset.number;
    displayCurr.textContent = input;
  }
});

keys.addEventListener('click', (e) => {
  if (e.target.matches('.key-operator')) {
    operator = e.target.dataset.operator;
    displayHist.textContent = input + operator;
    firstInput = parseFloat(input);
    displayCurr.textContent = '0';
    input = '';
  }
});

equalsBtn.addEventListener('click', (e) => {
  displayHist.textContent += input;
  secondInput = parseFloat(input);
  result = operate(operator, firstInput, secondInput);
  displayCurr.textContent = result;
  input = result;
});

// CLEAR BUTTON
clearBtn.addEventListener('click', (e) => {
  displayCurr.textContent = 0;
  displayHist.textContent = '';
  input = '';
  firstInput = 0;
  operator = '';
  secondInput = 0;
  result = 0;
});
