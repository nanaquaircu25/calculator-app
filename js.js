let currentInput = '';
let operator = '';
let previousInput = '';

const display = document.getElementById('display');

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  if (currentInput === '' || previousInput === '') return;

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('Cannot divide by zero');
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  display.value = result;
  currentInput = result.toString();
  operator = '';
  previousInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.value = '';
}
