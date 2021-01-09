'use strict';
const secretNumber = Math.trunc(Math.random()*21)
const message = document.querySelector('.message').textContent
const score = document.querySelector('.score').textContent
const number = document.querySelector('.number').textContent

document.querySelector('.check').addEventListener('click', function() {
    console.log('test')
    // if (secretNumber === "")
    //     {message = "no number given!"}
    // else if (secretNumber > number)
    //     {message = "too high"}
    // else if (secretNumber < number)
    //     {message = "too low"}
    // else if (secretNumber === number)
    //     (message = "you won this round")
};