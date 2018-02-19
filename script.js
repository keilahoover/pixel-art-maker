// Global Variables
var colorPalette = document.getElementsByClassName('color-palette')[0];
let pixelWrap = document.getElementsByClassName('pixel-wrap')[0];
var paintBrush;
var eraser = document.getElementsByClassName('eraser')[0]

// Build pixel grid
for (var i = 0; i < 700; i++) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  let pixelWrap = document.getElementsByClassName('pixel-wrap')[0];
  pixelWrap.appendChild(pixel);
}

// Event Listeners
colorPalette.addEventListener('click', selectColor);
pixelWrap.addEventListener('mousedown', brushDown);
pixelWrap.addEventListener('mousemove', addCurrentColor);
pixelWrap.addEventListener('mouseup', brushUp);
eraser.addEventListener('click', eraseColor);

// Callback Functions
function changeColor () {
  paintBrush = event.target.style.backgroundColor;
  console.log(paintBrush)
}

function selectColor (event) {
  paintBrush = event.target.style.backgroundColor;
}

function eraseColor () {
  event.target.style.backgroundColor = '#FFFFFF';
}

// Paintbrush Mouse Effect
var mouseOver = false;

function brushDown (e) {
  mouseOver = true;
  e.target.style.backgroundColor = paintBrush;
}

function brushUp (e) {
  mouseOver = false
}

function addCurrentColor (e) {
  if (mouseOver === true) {
    e.target.style.backgroundColor = paintBrush;
  }
}
