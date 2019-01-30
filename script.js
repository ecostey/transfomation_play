// Card Flip
let card = document.querySelector('.card');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});

// Cube
// let cube = document.querySelector('.cube');
// let diceArray = [1, 2, 3, 4, 5, 6];
// let randomRoll = diceArray[Math.floor(Math.random() * diceArray.length)];
// let showClass = 'show-side' + randomRoll;
// let currentClass = '';
// function changeSide() {
//     if (currentClass) {
//         cube.classList.remove(currentClass);
//     }
//     cube.classList.add(showClass);
//     currentClass = showClass;
// }
// cube.addEventListener('click', changeSide )

var cube = document.querySelector('.cube');

var min = 1;
var max = 24;

cube.onclick = function() {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min);
    
  cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
  cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}
