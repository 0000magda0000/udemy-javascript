'use strict';

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
      if (score > 1)
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
