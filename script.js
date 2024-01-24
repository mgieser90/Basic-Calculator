const displayText = document.getElementById('display-text');
const easterEggText = document.getElementById('display-eetext');
const numberButtons = document.querySelectorAll('.button-number');
const clearButton = document.getElementById('clear');
const delButton = document.getElementById('backspace');
const equalsButton = document.getElementById('equals');
const operatorButtons = document.querySelectorAll('.button-operator');
const decimalButton = document.getElementById('decimal');
let equalButtonClickCounter = 0;
let hasSeenEasterEgg = false;

//Adds the number to the display
numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', () => {
    easterEggText.textContent = "";
    displayText.textContent += numberButton.textContent;
  });
});

//Clears the display
clearButton.addEventListener('click', () => {
  easterEggText.textContent = "";
  displayText.textContent = '';
});

//Deletes the last character from the display
delButton.addEventListener('click', () => {
  easterEggText.textContent = "";
  displayText.textContent = displayText.textContent.slice(0, -1);
});

//Adds the operator to the display while not allowing the user to add two operators in a row or before any numbers have been added 
//Future feature: If last character is an operator, replace it with the new operator
operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', () => {
    easterEggText.textContent = "";
    displayText.textContent == "" || 
      displayText.textContent.endsWith('/') ||  
      displayText.textContent.endsWith('*') || 
      displayText.textContent.endsWith('-') || 
      displayText.textContent.endsWith('+') ? null : displayText.textContent += operatorButton.textContent;
  });
});

//Adds the decimal to the display while only allowing one decimal to be added per number set
decimalButton.addEventListener('click', () => {
  easterEggText.textContent = "";
  const parts = displayText.textContent.split(/([\+\-\*\/])/);
  if (parts.length > 0 && !parts[parts.length - 1].includes('.')) {
      displayText.textContent += '.';
  }
});

//Computes the math that is in the display following proper order of operations
equalsButton.addEventListener('click', () => {
  equalButtonClickCounter++;
  console.log(equalButtonClickCounter);
  const parts = displayText.textContent.split(/([\+\-\*\/])/).filter(Boolean);

  if (parts.length > 0 && /([\+\-\*\/])/.test(parts[parts.length - 1])) {
    displayText.textContent = displayText.textContent;
    window.alert("Cannot calculate with equation ending with an operator");
  } else {
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === '/') {
        const result = parseFloat(parts[i - 1]) / parseFloat(parts[i + 1]);
        parts.splice(i - 1, 3, result.toString());
        i = -1;
      }
      if (parts[i] === '*') {
        const result = parseFloat(parts[i - 1]) * parseFloat(parts[i + 1]);
        parts.splice(i - 1, 3, result.toString());
        i = -1;
      }
    }
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === '+') {
        const result = parseFloat(parts[i - 1]) + parseFloat(parts[i + 1]);
        parts.splice(i - 1, 3, result.toString());
        i = -1;
      }
      if (parts[i] === '-') {
        const result = parseFloat(parts[i - 1]) - parseFloat(parts[i + 1]);
        parts.splice(i - 1, 3, result.toString());
        i = -1;
      }
    }
    displayText.textContent = parts;
  }
  easterEggText.textContent = easterEgg(displayText.textContent)
  
});

function easterEgg(numberText){
  switch(numberText) { 
    case "42":
      equalButtonClickCounter = 0;
      hasSeenEasterEgg = true;
      return "The answer to the ultimate question of life, the universe, and everything."; 
        break;
    case "8008":
      equalButtonClickCounter = 0;
      hasSeenEasterEgg = true;
      return "Really?...";
        break;
    case "5318008":
      equalButtonClickCounter = 0;
      hasSeenEasterEgg = true;
      return  "Are you really flipping your device upside-down?";
        break;
    default:
      if (equalButtonClickCounter === 5 && hasSeenEasterEgg === false) {
        return "Haven't found any easter eggs yet?";
      } else if (equalButtonClickCounter === 10 && hasSeenEasterEgg === false) {
        return "Maybe try 21*2..."
      }
      return "";
    }
  
}
