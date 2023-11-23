let firstNum;
let operator;
let secondNum;
let result;
let outputResult = document.querySelector('#result');
let outputExpression = document.querySelector('#expression');
let digitButtons = document.querySelectorAll('#digits');
let operatorButtons = document.querySelectorAll('#operators');
let displayValue = ""

const updateDisplay = function(e){
  if (e.value != '+' && e.value != '*' && e.value != '/' && e.value != '-'){
    displayValue += e.value
    outputExpression.textcontent = displayValue;
  }
  else if (e.value == '+' || e.value == '*' || e.value == '/' || e.value == '-'){
    if(displayValue.includes('+') || displayValue.includes('-') || displayValue.includes('*') || displayValue.includes('/')){
      
    } else {displayValue += ` ${e.value} `;}
    outputExpression.textcontent = displayValue;
  }
  document.getElementById("expression").textContent = displayValue;
}

document.querySelectorAll('.digitB').forEach(el => el.addEventListener('click', () => {
  updateDisplay(el);
}));

document.querySelectorAll('.operatorB').forEach(el => el.addEventListener('click', () => {
  updateDisplay(el);
}));

document.querySelector('#evaluate').addEventListener('click', () => {
  let splitExpression = displayValue.split(" ", 3)
  console.log(splitExpression);
  firstNum = Number(splitExpression[0]);
  operator = splitExpression[1];
  secondNum = Number(splitExpression[2]);
  evaluate(firstNum, splitExpression[1], secondNum);
  document.getElementById("result").textContent = result;
});



const evaluate = function (firstNum, operator, secondNum) {
  if (operator == '+') {
    result = firstNum + secondNum;
  } else if (operator == '-') {
    result = firstNum - secondNum;
  } else if (operator == '*') {
    result = firstNum * secondNum;
  } else if (operator == '/') {
    result = firstNum / secondNum;
  }
};
