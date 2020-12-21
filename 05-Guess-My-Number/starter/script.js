'use strict';
const secretNumber = Math.trunc(Math.random()*21)
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const number = document.querySelector('.number').textContent

const submit = (() => {
    if (secretNumber === "")
        {message.textContent = "no number given!"}
    else if (secretNumber > number)
        {message.textContent = "too high"}
    else if (secretNumber < number)
        {message.textContent = "too low"}
    else if (secretNumber === number)
        (message.textContent = "you won this round")
})
const check = document.querySelector(".check")
check.addEventListener('click', submit)