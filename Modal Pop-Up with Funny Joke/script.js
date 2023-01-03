'use strict';

const hiddenText = document.querySelector('.modal');
const clickButton = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');

// Makes Pop up appear after clicking on each button
clickButton.forEach(function (clickButton) {
  clickButton.addEventListener(`click`, function () {
    hiddenText.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

// Closes Pop up and overlay after clicking an X
closeButton.addEventListener('click', function () {
  hiddenText.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Closes Pop up and overlay after clicking an Escape key on keyobard
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    hiddenText.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

// Closes Pop up and overlay after clicking outside of a popup
overlay.addEventListener('click', function () {
  hiddenText.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Dividing big problem into Sub problems:
// 1.make Pop up appear on click: DONE
// 2.make Pop up dissapear with X button: DONE
// 3.make Pop up appear on every button afer a click: DONE
// 4.make Pop up dissapear after clicknig ESC button: DONE
// 5.make Pop up dissapear after clicking aoutside of text: DONE
