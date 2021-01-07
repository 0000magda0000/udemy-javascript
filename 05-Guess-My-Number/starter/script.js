'use strict';
<<<<<<< HEAD

const check = document.querySelector(".check");
const again = document.querySelector('.again');

again.addEventListener('click', function() { 
    let score = 20;
    const secretNumber = Math.trunc(Math.random()*21);


check.addEventListener('click', function() {
let guess = Number(document.querySelector('.guess').value);
let message = document.querySelector('.message');
    if (!guess) { 
        message.textContent = "no number given!";
    }

    else if (secretNumber === guess) { 
        document.querySelector('body').style.backgroundColor = '#60b347';
        message.textContent = "you won this round";
        document.querySelector('.number').textContent = secretNumber;   
    }
    else if (secretNumber < guess) {
        if (score > 1) {
            message.textContent = "too high";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            message.textContent = "You have lost the game :(";    
    }
    }
    else if (secretNumber > guess) {
        if (score > 1) {
            message.textContent = "too low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            message.textContent = "You have lost the game :(";    
        }
    }
});
});
=======
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
>>>>>>> 153f6c7b0dbe4b4438de969dc5597d598739ba80
