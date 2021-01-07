'use strict';
// const secretNumber = Math.trunc(Math.random() * 21);
// let message = document.querySelector('.message').innerText;
// let score = document.querySelector('.score').innerText;
// let guess = document.querySelector('.guess').value;
// let check = document.querySelector('.check');
let check = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;
let again = document.querySelector('.again');
again.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.guess').value = '';
});

check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(secretNumber);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number given!';
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = 'you won this round';
    highscore++;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.highscore').textContent = highscore;
  } else if (secretNumber < guess) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'too high';
  } else if (secretNumber > guess) {
    score--;
    document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = 'too low';
  }
});
