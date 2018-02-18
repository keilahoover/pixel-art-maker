// Build grid
for (var i = 0; i < 100; i++) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  let pixelWrap = document.getElementsByClassName('pixel-wrap')[0];
  pixelWrap.appendChild(pixel);
}



// Global Variables
// var pixelOne = document.querySelector('.pixel-one');
// var pixelTwo = document.querySelector('.pixel-two');
// var pixelThree = document.querySelector('.pixel-three');
// var pixelFour = document.querySelector('.pixel-four')
var colorOne = document.querySelector('.color-one');
// var pixel = document.querySelector('.pixel');
var colorPalette = document.getElementsByClassName('color-palette')[0]

var paintBrush = '';
// Event Listeners
// pixel.addEventListener('click', function () {
//   pixelOne.style.backgroundColor = "red";
//   console.log('clicked!')
// });
//
// pixelTwo.addEventListener('click', function () {
//   pixelTwo.style.backgroundColor = "red";
//   console.log('second pixel!')
// });
//
// pixelThree.addEventListener('click', function () {
//   pixelThree.style.backgroundColor = "red";
//   console.log('3rd pixel!')
// });
//
// pixelFour.addEventListener('click', function () {
//   pixelFour.style.backgroundColor = "red";
//   console.log('4th pixel!')
// });

// Color Pallete Event Listeners
colorPalette.addEventListener('click', function (event) {
  paintBrush = event.target.style.backgroundColor;
  console.log(paintBrush);
});

let pixelWrap = document.getElementsByClassName('pixel-wrap')[0];
pixelWrap.addEventListener('click', function (event) {
  event.target.style.backgroundColor = paintBrush;
});
