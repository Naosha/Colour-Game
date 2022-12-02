'use strict';

let numSquares = 6;
let colors = [];
let pickedColor = '';
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.getElementById('resetBtn');
const modeButtons = document.querySelectorAll('.mode');

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  modeButtons.forEach((modeBtn) => {
    modeBtn.addEventListener('click', () => {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      modeBtn.classList.add('selected');
      modeBtn.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  });
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
      let clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again';
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = '#f5f5f5';
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'New Colours';
  messageDisplay.textContent = '';

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.background = 'steelblue';
}

resetButton.addEventListener('click', function () {
  reset();
});

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

init();
