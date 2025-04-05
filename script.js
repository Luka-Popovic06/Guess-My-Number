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
