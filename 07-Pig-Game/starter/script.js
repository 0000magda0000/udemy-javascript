'use strict';
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
const player1 = document.querySelector('.player--1')
const player2 = document.querySelector('.player--2')
let playerActive = document.querySelector('.player--active')


btnRoll.addEventListener('click', function () {
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice)
    document.querySelector('.dice').src = `dice-${dice}.png`;
    if 
})


