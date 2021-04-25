'use strict';
// console.log(document.querySelector('.message').textContent);
    

// document.querySelector('.message').textContent = '🎉Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 39;

//document.querySelector('.guess').value = 21;


const randomnumb = Math.round(Math.random() * 20);
console.log(randomnumb);
let score = 20;
let highscore;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
if(!guess){
    document.querySelector('.message').textContent = "You didn't choose a number🤷‍♀️";
}else if(guess == randomnumb){
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = guess;

    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30vw'
}else if(guess > randomnumb){
    if(score > 1){
    document.querySelector('.message').textContent = 'Too high📈';
    score--
    document.querySelector('.score').textContent = score;
    }else{
    document.querySelector('.message').textContent = '💥You lost the game';
    document.querySelector('.score').textContent = 0;
    }

}else if(guess < randomnumb){
    if(score > 1){
        document.querySelector('.message').textContent = 'Too low📉';
        score--
        document.querySelector('.score').textContent = score;
        }else{
        document.querySelector('.message').textContent = '💥You lost the game';
        document.querySelector('.score').textContent = 0;
        }
    
}
}
)








