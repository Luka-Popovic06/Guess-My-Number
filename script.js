'use strict';
const guess = document.querySelector('.guess');
const check = document.querySelector('.btn-check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const guesses = document.querySelector('#guesses');
const body = document.querySelector('body');
const highscore = document.querySelector('.highscore');
const secretNumber = document.querySelector('.number');
const random = Math.trunc(Math.random() * 20) + 1;
secretNumber.textContent = random;
let number = 20;
let value = 1;
let guessNumber;
check.addEventListener('click', function () {
  minus();
  messages();
  highscores();
  backgrounColor();
});
guess.addEventListener('input', function (e) {
  guessNumber = e.target.value;
});

function messages() {
  if (guessNumber > secretNumber.textContent) {
    message.textContent = '📈 Too high!';
  } else if (guessNumber < secretNumber.textContent) {
    message.textContent = '📉 Too low!';
  } else if (!guessNumber) {
    message.textContent = '⛔️ No number!';
  } else if (guessNumber === secretNumber.textContent) {
    message.textContent = '🎉 Correct Number!';
  }
}
function minus() {
  if (guessNumber > secretNumber.textContent) {
    number = number - value;
    score.textContent = number;
  } else if (guessNumber < secretNumber.textContent) {
    number = number - value;
    score.textContent = number;
  }
}
function highscores() {
  if (guessNumber === secretNumber.textContent) {
    highscore.textContent = score.textContent;
  }
} //????
function backgrounColor() {
  if (guessNumber === secretNumber.textContent) {
    body.style.backgroundColor = '#60b346';
    secretNumber.style.padding = '55px';
  } else if (number === 0) {
    body.style.backgroundColor = 'red';
  }
}
