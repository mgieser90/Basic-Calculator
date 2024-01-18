const displayText = document.getElementById('display-text');
const easterEggText = document.getElementById('display-eetext');
const numberButtons = document.querySelectorAll('.button-number');
const clearButton = document.getElementById('clear');
const delButton = document.getElementById('backspace');
const equalsButton = document.getElementById('equals');
const operatorButtons = document.querySelectorAll('.button-operator');
const decimalButton = document.getElementById('decimal');
const polarityToggle = document.getElementById('polarity');

//Adds the number to the display
numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', () => {
    displayText.textContent += numberButton.textContent;
  });
});

//Clears the display
clearButton.addEventListener('click', () => {
  displayText.textContent = '';
});

//Deletes the last character from the display
delButton.addEventListener('click', () => {
  displayText.textContent = displayText.textContent.slice(0, -1);
});

//Adds the operator to the display while not allowing the user to add two operators in a row or before any numbers have been added 
//Future feature: If last character is an operator, replace it with the new operator
operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', () => {
    displayText.textContent == "" || 
      displayText.textContent.endsWith('/') ||  
      displayText.textContent.endsWith('*') || 
      displayText.textContent.endsWith('-') || 
      displayText.textContent.endsWith('+') ? null : displayText.textContent += operatorButton.textContent;
  });
});

//Adds the decimal to the display while only allowing one decimal to be added per number set
decimalButton.addEventListener('click', () => {
  const parts = displayText.textContent.split(/([\+\-\*\/])/);
  if (parts.length > 0 && !parts[parts.length - 1].includes('.')) {
      displayText.textContent += '.';
  }
});

//Figure out the polarity button



//computes the math that is in the display following proper order of operations
equalsButton.addEventListener('click', () => {
  const expression = displayText.textContent;
  const result = 
}
