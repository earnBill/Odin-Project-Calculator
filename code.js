let number1;
let number2;
let operant;

const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.calcBtns');


buttons.forEach((button) => {
    button.textContent = button.dataset.name;
});


clearBtn.addEventListener('click', () => {
  console.log('clear');
  clear();
})

deleteBtn.addEventListener('click', () => {
  console.log('delete');
  screen.textContent =  deleted();
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
  
}

buttons.forEach(function(button) {
  button.addEventListener('click',() =>{
    console.log(button.dataset.name);
    screen.textContent += button.dataset.name; 
  })
})


console.log(add(15, 11));
console.log(subtract(15, 11));
console.log(multiply(15, 11));
console.log(divide(15, 10));

console.log(buttons[0])