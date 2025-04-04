'use strict';
const again = document.querySelector('.btn-again');
const guess = document.querySelector('.guess');
const check = document.querySelector('.btn-check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const guesses = document.querySelector('#guesses');
const body = document.querySelector('body');
const highscore = document.querySelector('.highscore');
const secretNumber = document.querySelector('.number');
let random = Math.trunc(Math.random() * 20) + 1;
secretNumber.textContent = random;
let number = 20;
let value = 1;
let guessNumber;
check.addEventListener('click', function () {
  minus();
  messages();
  highscores();
  backgroundColor();
});
again.addEventListener('click', againBtn);

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
    if (highscore.textContent < score.textContent) {
      highscore.textContent = score.textContent;
    } else {
      highscore.textContent = score.textContent;
    }
  }
}
//????
function backgroundColor() {
  if (guessNumber === secretNumber.textContent) {
    body.style.backgroundColor = '#60b346';
    secretNumber.style.padding = '55px';
  } else if (number === 0) {
    body.style.backgroundColor = 'red';
  }
}
function againBtn() {
  let random = Math.trunc(Math.random() * 20) + 1;
  secretNumber.textContent = random;
  number = 20;
  score.textContent = number;
  body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  guess.value = '';
}
