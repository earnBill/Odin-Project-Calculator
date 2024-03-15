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
    number1 = screen.textContent;
    console.log(number1);
  })
})

clearBtn.addEventListener('click', () => {
  console.log('clear');
  clear();
  screenText = screen.textContent;
  console.log(screenText);
})

deleteBtn.addEventListener('click', () => {
  console.log('delete');
  screen.textContent =  deleted();
  screenText = screen.textContent;
  console.log(screenText);
})

// equalBtn.addEventListener('click',() => {
//   let text = screenText.split(/[-+/*=]/);
//   console.log(text);
//   number1 = text[0];
//   number2 = text[1];
//   let text2 = screenText.split(/[1234567890]/);
//   console.log(text2);

//   console.log(number1);
//   console.log(number2);
//   console.log(operant);
// });



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
  
}

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


