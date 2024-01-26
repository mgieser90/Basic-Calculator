const displayText = document.getElementById('display-text');
const easterEggText = document.getElementById('display-eetext');
const numberButtons = document.querySelectorAll('.button-number');
const clearButton = document.getElementById('clear');
const delButton = document.getElementById('backspace');
const equalsButton = document.getElementById('equals');
const operatorButtons = document.querySelectorAll('.button-operator');
const decimalButton = document.getElementById('decimal');
const polarityButton = document.getElementById('polarity');

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
    displayText.textContent === "" || 
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

//Changes the polarity of the most recent number in the display
polarityButton.addEventListener('click', () => {
  const parts = displayText.textContent.split(/([\+\-\*\/])/).filter(Boolean);
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === '-' && i === 0 || parts[i] === '-' && /([\+\-\*\/])/.test(parts[i - 1].slice(-1))) {
      const negative = [parts[i], parts[i + 1]].join('');
      parts.splice(i, 2, negative);
      i = -1;
    }
  }
  if (parts.length > 0 && /[\+\-\*\/]/.test(parts[parts.length - 1].charAt(parts[parts.length - 1].length - 1))) {
    return;
  }
  parts[parts.length - 1] = (parseFloat(parts[parts.length - 1])) * -1;
  displayText.textContent = parts.join('');
});

//Computes the math that is in the display following proper order of operations
equalsButton.addEventListener('click', () => {
  if (displayText.textContent === '') {
    return;
  }
  equalButtonClickCounter++;
  console.log(hasSeenEasterEgg);
  console.log(easterEggsFound);
  console.log(equalButtonClickCounter);
  console.log(hasSeen42EasterEgg)
  const parts = displayText.textContent.split(/([\+\-\*\/])/).filter(Boolean);
//This for loop keeps the "-" character from being seperated from the number it is attached to when a negative answer is given
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === '-' && i === 0 || parts[i] === '-' && /([\+\-\*\/])/.test(parts[i - 1].slice(-1))) {
      const negative = [parts[i], parts[i + 1]].join('');
      parts.splice(i, 2, negative);
      i = -1;
    }
  }

  if (parts.length > 0 && /[\+\-\*\/]/.test(parts[parts.length - 1].charAt(parts[parts.length - 1].length - 1))
) {
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
    }
  const numToCheck = parseFloat(parts.join(''));

  // Checks the number of decimal places and rounds the answer to the nearest 4th decimal place if needed
  const decimalPlaces = (numToCheck.toString().split('.')[1] || '').length;
  const roundedResult = decimalPlaces >= 4 ? numToCheck.toFixed(4) : numToCheck;
  displayText.textContent = roundedResult.toString();
  easterEggText.textContent = easterEgg(displayText.textContent);
});

//Displays the easter egg text when the user presses the equals button and the answer or number on the display matches one of these switch cases
function easterEgg(numberText){
  switch(numberText) { 
    case "42":
      if (hasSeen42EasterEgg === false) {
        equalButtonClickCounter = 0;
        easterEggsFound++;
        hasSeenEasterEgg = true;
        hasSeen42EasterEgg = true;
      }
      return "The answer to the ultimate question of life, the universe, and everything."; 
        break;
      case "7777777":
      if (hasSeen7EasterEgg === false) {
        equalButtonClickCounter = 0;
        easterEggsFound++;
        hasSeenEasterEgg = true;
        hasSeen7EasterEgg = true;
      }
      return "WHAT'S IN THE BOX?!?!?!"; 
        break;
    case "8008":
      if (hasSeen8008EasterEgg === false) {
        equalButtonClickCounter = 0;
        easterEggsFound++;
        hasSeenEasterEgg = true;
        hasSeen8008EasterEgg = true;
      }
      return "Really?...";
        break;
    case "5318008":
      if (hasSeen5318008EasterEgg === false) {
        equalButtonClickCounter = 0;
        easterEggsFound++;
        hasSeenEasterEgg = true;
        hasSeen5318008EasterEgg = true;
      }
      return  "Are you really flipping your device upside-down?";
        break;
    default:
      if (equalButtonClickCounter === 5 && hasSeenEasterEgg === false) {
        return "Haven't found any easter eggs yet?";
      } else if (equalButtonClickCounter === 10 && hasSeenEasterEgg === false) {
        return "Maybe try 21*2..."
      } else if (equalButtonClickCounter === 20 && allEasterEggsFound === false) {
        return "There are still more easter eggs to find..."; 
      } else if (easterEggsFound === 4 && allEasterEggsFound === false) {
        allEasterEggsFound = true;
        return "You found all the easter eggs! Congratulations!";
      } 
      return "";
    }

}

//Easter egg tracking... shhhh!
let equalButtonClickCounter = 0;
let easterEggsFound = 0;
let hasSeenEasterEgg = false;
let hasSeen42EasterEgg = false;
let hasSeen7EasterEgg = false;
let hasSeen8008EasterEgg = false;
let hasSeen5318008EasterEgg = false;
let allEasterEggsFound = false;
