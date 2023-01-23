'use strict';
let message = document.querySelector('.message');
let guess = document.querySelector('.guess');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let check = document.querySelector('.check');
let realNum = document.querySelector('.number');
let body = document.querySelector('body');
let again = document.querySelector('.again');

let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
let scoreNum = 20;
highScore.textContent = 0;


//Reseting game settings
again.addEventListener('click', function () {

    scoreNum = 20;
    message.textContent = 'Start Guessing...';
    score.textContent = scoreNum;
    guess.value = '';

    realNum.textContent = '?';
    realNum.style.width = '15rem';
    body.style.backgroundColor = 'rgb(34,34,34)';

    number = Math.trunc(Math.random() * 20 + 1);
    console.log(number);
})

//Matching the guess with number
check.addEventListener('click', function () {
    let guessNum = Number(guess.value);

    //Checking for wrong inputs
    if (guessNum < 1 || guessNum > 20 || !guessNum) {
        message.textContent = '❌ Wrong Input!';
    }

    //Checking for score left
    else if (scoreNum > 0) {

        //Checking for correct input
        if (guessNum === number) {
            message.textContent = '🏆Congratulasion, You Won!';
            if (scoreNum > highScore.textContent) {
                highScore.textContent = scoreNum;
            }
            realNum.textContent = number;
            realNum.style.width = '30rem';
            body.style.backgroundColor = 'green';
        }

        //Checking for lesser input
        else if (guessNum < number && scoreNum > 1) {
            message.textContent = '📉Too Low!';
            scoreNum--;
            score.textContent = scoreNum;
        }

        //Checking for higher input
        else if (guessNum > number && scoreNum > 1) {
            message.textContent = '📈Too High!';
            scoreNum--;
            score.textContent = scoreNum;
        }

        //Loosing game message
        else {
            message.textContent = '❌ You Lost!';
            scoreNum--;
            score.textContent = scoreNum;
        }
    }
})

