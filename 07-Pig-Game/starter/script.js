'use strict';
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore0 = document.querySelector('.current--0');
let currentScore1 = document.querySelector('.current--1');
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
let activePlayer = 0

let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
score0 = 0
score1 = 0
currentScore0 = 0
currentScore1 = 0

const switchPlayer = function () {
    player1.classList.toggle('player--active')
    player0.classList.toggle('player--active')
    activePlayer = activePlayer === 0 ? 1 : 0;

}



btnRoll.addEventListener('click', function () {
    let dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 1) {
        switchPlayer()
        document.querySelector('.dice').src = `dice-${dice}.png`;
    }
    else {
        document.querySelector('.dice').src = `dice-${dice}.png`;
        currentScore0 += dice
        document.getElementById(`current--${activePlayer}`).innerText = currentScore0
    }
})


btnHold.addEventListener('click', function () {
   if (activePlayer === 0 ) {
    score0 += currentScore0
    document.getElementById('score--0').innerText = score0
    switchPlayer();
   }
   else {
    score1 += currentScore1
    document.getElementById('score--1').innerText = score1
    switchPlayer();
   }
})