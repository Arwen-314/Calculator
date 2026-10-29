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

// console.log(operate('x', 3, 2));

// FUNCTION
const keys = document.querySelector('.keys');
const clearBtn = document.querySelector('.key-clear');
const equalsBtn = document.querySelector('.key-equals');
const displayCurr = document.querySelector('.display-current');
const displayHist = document.querySelector('.display-history');

let digits = [];
let input = '';
// let firstInput = 0;
let operator = '';
// let secondInput = 0;
let result = 0;

// number event listener
keys.addEventListener('click', (e) => {
  if (e.target.matches('.key-number')) {
    input = e.target.dataset.number;
    displayCurr.textContent = input;
  }
});

// function to store input and operator in an array
function toArray(input, operator) {
  digits.push(input);
  digits.push(operator);
}

// operator event listener
keys.addEventListener('click', (e) => {
  if (e.target.matches('.key-operator')) {
    operator = e.target.dataset.operator;
    toArray(input, operator);
    displayHist.textContent = digits.join('');
    displayCurr.textContent = '0';
  }
});

// equals event listener
equalsBtn.addEventListener('click', (e) => {
  displayHist.textContent += input;
  secondInput = parseFloat(input);
  result = operate(operator, firstInput, secondInput);
  displayCurr.textContent = result;
  input = result;
});

// CLEAR BUTTON
clearBtn.addEventListener('click', (e) => {
  digits = [];
  displayCurr.textContent = 0;
  displayHist.textContent = '';
  input = '';
  // firstInput = 0;
  operator = '';
  // secondInput = 0;
  result = 0;
});
