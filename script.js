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
const modal = document.querySelector('.modal');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const inpEasy = document.querySelector('#easy');
const inpMedium = document.querySelector('#medium');
const inpHard = document.querySelector('#hard');
const btnStart = document.querySelector('#btn-start');
let random = Math.trunc(Math.random() * 20) + 1;
let guessesNumberTwo;
let number = 20;
let value = 1;
let guessNumber;
btnStart.addEventListener('click', function () {
  start();
  redustionScore();
});
function start() {
  header.classList.remove('blure');
  main.classList.remove('blure');
  modal.classList.add('hidden');
}
check.addEventListener('click', function () {
  guessesValue();
  minus();
  messages();
  highscores();
  backgroundColor();
});
again.addEventListener('click', function () {
  againBtn();
});

guess.addEventListener('input', function (e) {
  guessNumber = e.target.value;
});
inpEasy.addEventListener('input', function (e) {
  guessesNumberTwo = 20;
  guesses.textContent = guessesNumberTwo;
});
inpMedium.addEventListener('input', function (e) {
  guessesNumberTwo = 10;
  guesses.textContent = guessesNumberTwo;
});
inpHard.addEventListener('input', function (e) {
  guessesNumberTwo = 5;
  guesses.textContent = guessesNumberTwo;
});
function guessesValue() {
  guessesNumberTwo = guessesNumberTwo - 1;
  guesses.textContent = guessesNumberTwo;
}

function messages() {
  if (guessNumber > random) {
    message.textContent = '📈 Too high!';
  } else if (guessNumber < random) {
    message.textContent = '📉 Too low!';
  } else if (!guessNumber) {
    message.textContent = '⛔️ No number!';
  } else if ((guessNumber = random)) {
    message.textContent = '🎉 Correct Number!';
    secretNumber.textContent = random;
    check.disabled = true;
  }
}
function redustionScore() {
  if (guessesNumberTwo === 20) {
    value = 3;
  } else if (guessesNumberTwo === 10) {
    value = 2;
  } else {
    value = 1;
  }
}
function minus() {
  console.log('secreNumber.texContent', secretNumber.textContent);
  if (guessNumber > random) {
    number = number - value;
    score.textContent = number;
  } else if (guessNumber < random) {
    number = number - value;
    score.textContent = number;
  }
}
function highscores() {
  if (guessNumber === random) {
    if (highscore.textContent < score.textContent) {
      highscore.textContent = score.textContent;
    } else {
      highscore.textContent = score.textContent;
    }
  }
}

function backgroundColor() {
  if (guessNumber === random) {
    body.style.backgroundColor = '#60b346';
    secretNumber.style.padding = '55px';
  } else if (guessesNumberTwo === 0) {
    body.style.backgroundColor = 'red';
    message.textContent = '💥 You lost the game!';
    check.disabled = true;
  } else if (number < 1) {
    body.style.backgroundColor = 'red';
    message.textContent = '💥 You lost the game!';
    check.disabled = true;
  }
}
function againBtn() {
  random = Math.trunc(Math.random() * 20) + 1;
  secretNumber.textContent = '?';
  number = 20;
  score.textContent = number;
  body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  guess.value = '';
  header.classList.add('blure');
  main.classList.add('blure');
  modal.classList.remove('hidden');
  check.disabled = false;
}
