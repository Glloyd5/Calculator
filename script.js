let firstNum;
let operator;
let secondNum;
let result;
let outputResult = document.querySelector('#result');
let outputExpression = document.querySelector('#expression');
let digitButtons = document.querySelectorAll('.digitB');
let operatorButtons = document.querySelectorAll('.operatorB');

digitButtons.addEventListener('click',)
operatorButtons.addEventListener('click',)

const updateExpression = function(){
    outputExpression.textContent = `${firstNum} ${operator} ${secondNum}`;
}

const updateResult = function(){
    outputResult.textContent = `${result}`;
}

const add = function (firstNum, secondNum) {
  result = firstNum + secondNum;
};

const subtract = function (firstNum, secondNum) {
  result = firstNum - secondNum;
};

const multiply = function (firstNum, secondNum) {
  result = firstNum * secondNum;
};

const divide = function (firstNum, secondNum) {
  result = firstNum / secondNum;
};

const evaluate = function (firstNum, secondNum) {
  if (operator == 'add') {
    add(firstNum, secondNum);
  } else if (operator == 'subtract') {
    subtract(firstNum, secondNum);
  } else if (operator == 'multiply') {
    multiply(firstNum, secondNum);
  } else if (operator == 'divide') {
    divide(firstNum, secondNum);
  }
};
