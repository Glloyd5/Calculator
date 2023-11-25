let firstNum;
let operator;
let secondNum;
let result = 0;
let outputResult = document.querySelector('#result');
let outputExpression = document.querySelector('#expression');
let digitButtons = document.querySelectorAll('#digits');
let operatorButtons = document.querySelectorAll('#operators');
let displayValue = '';

const updateDisplay = function (e) {
  if (e.value != '+' && e.value != '*' && e.value != '/' && e.value != '-') {
    displayValue += e.value;
  } else if (
    e.value == '+' ||
    e.value == '*' ||
    e.value == '/' ||
    e.value == '-'
  ) {
    if (
      displayValue.includes('+') ||
      displayValue.includes('-') ||
      displayValue.includes('*') ||
      displayValue.includes('/')
    ) {
      if (result != 0) {
        displayValue = result + ` ${e.value} `;
      }
    } else if (displayValue.length < 1) {
      displayValue = `0 ${e.value} `;
    } else {
      displayValue += ` ${e.value} `;
    }
  }
  document.getElementById('expression').textContent = displayValue;
};

document.querySelectorAll('.digitB').forEach((el) =>
  el.addEventListener('click', () => {
    updateDisplay(el);
  })
);

document.querySelectorAll('.operatorB').forEach((el) =>
  el.addEventListener('click', () => {
    updateDisplay(el);
  })
);

document.querySelector('#clear').addEventListener('click', () => {
  clear();
});

document.querySelector('#evaluate').addEventListener('click', () => {
  let splitExpression = displayValue.split(' ', 3);
  console.log(splitExpression);
  firstNum = Number(splitExpression[0]);
  operator = splitExpression[1];
  secondNum = Number(splitExpression[2]);
  evaluate(firstNum, splitExpression[1], secondNum);
  document.getElementById('result').textContent = result;
});

const clear = function () {
  result = 0;
  document.getElementById('result').textContent = 0;
  displayValue = '';
  document.getElementById('expression').textContent = '';
  console.log('hi');
};

const evaluate = function (firstNum, operator, secondNum) {
  if (operator == '+') {
    result = firstNum + secondNum;
  } else if (operator == '-') {
    result = firstNum - secondNum;
  } else if (operator == '*') {
    result = firstNum * secondNum;
  } else if (operator == '/') {
    if (secondNum == 0) {
      result = "Error";
      document.getElementById('result').textContent = result;
      setTimeout(() => {clear()}, 3000); 
    } else {
      result = firstNum / secondNum;
    }
  }
};

// Fix dont allow numbers to be added to display value after a calculation
// Fix if display value is 0 and they use a 2nd operator calculate.
