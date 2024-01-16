const displayText = document.getElementById('display-text');
const easterEggText = document.getElementById('display-eetext');
const numberButtons = document.querySelectorAll('.button-number');
const clearButton = document.getElementById('clear');


numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', () => {
    displayText.textContent += numberButton.textContent;
  });
});

clearButton.addEventListener('click', () => {
  displayText.textContent = '';
});
