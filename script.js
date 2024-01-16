const displayText = document.getElementById('display-text');
const easterEggText = document.getElementById('display-eetext');
const numberButtons = document.querySelectorAll('.button-number');
const clearButton = document.getElementById('clear');
const delButton = document.getElementById('backspace');

numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', () => {
    displayText.textContent += numberButton.textContent;
  });
});

clearButton.addEventListener('click', () => {
  displayText.textContent = '';
});

delButton.addEventListener('click', () => {
  displayText.textContent = displayText.textContent.slice(0, -1);
});
