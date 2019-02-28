// Operands
const divisionButton = document.querySelector('.division');
const multiplyButton = document.querySelector('.multiply');
const subtractionButton = document.querySelector('.subtraction');
const summatoryButton = document.querySelector('.summatory');

// Modifier
const decimalButton = document.querySelector('.decimal');
// Clear
const clearAllButton = document.querySelector('.clear-all');
// Equals
const equalsButton = document.querySelector('.equals');

// Display
const displayScreen = document.querySelector('.display');

// Numbers
const numbers = document.querySelectorAll('div[data-number]');

for(let number of numbers) {
  number.addEventListener('click', () => {
    console.log(number);
  })
}
