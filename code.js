let number1;
let number2;
let operant;
let reset = false;

const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('#equal');
const acts = document.querySelectorAll('.act');

let buttons = document.querySelectorAll('.calcBtns');
let screenText = screen.textContent;

document.addEventListener('DOMContentLoaded', () => { 
  buttons.forEach((button) => {
  button.textContent = button.dataset.name;
  })
});


acts.forEach(function(act) {
  act.addEventListener('click',() => {
    reset = true;

    if (operant) {
      number2 = Number(screen.textContent);
      console.log(number2);
      operate(number1, number2, operant);
      operant = act.dataset.name;
      console.log(operant);
      return
    }

    number1 = Number(screen.textContent);
    operant = act.dataset.name;
    console.log(number1);
    console.log(operant);
  })
})

clearBtn.addEventListener('click', () => {
  console.log('clear');
  clear();
  screenText = screen.textContent;
  number1 = 0;
  number2 = 0;
  operant = '';
  console.log(screenText);
})

deleteBtn.addEventListener('click', () => {
  console.log('delete');
  screen.textContent =  deleted();
  screenText = screen.textContent;
  console.log(screenText);
})

equalBtn.addEventListener('click',() => {
  number2 = Number(screen.textContent);
  console.log(number2);
  operate(number1, number2, operant );
  operant = '';  
});


buttons.forEach(function(button) {
  button.addEventListener('click',() =>{
    if (reset === true) {
      clear();
    }
    screen.textContent += button.dataset.name; 
    screenText = screen.textContent;
    reset = false;
  })
})


function deleted() {
  let screenText = screen.textContent;
  return screenText.slice(0,-1);
}

function clear() {
  screen.textContent = '';
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operant) {
  let result;
  if (operant === '-') {
    result = subtract(num1, num2);
  }
  else if (operant === '+') {
    result = add(num1, num2);
  }
  else if (operant === '*') {
    result = multiply(num1, num2);
  }
  else if (operant === '/') {
    result = divide(num1, num2);
  }
  console.log(result);

  screen.textContent = result
  number1 = result;
}



