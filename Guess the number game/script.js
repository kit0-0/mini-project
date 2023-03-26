'use strict'

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent='correct number'

// document.querySelector('.number').textContent=13

// document.querySelector('.score').textContent=10

// document.querySelector('.guess').value=23
// console.log(document.querySelector('.guess').value)

let secretNumber =Math.trunc(Math.random() * 20) + 1
//document.querySelector('.number').textContent=secretNumber
let score=20
let highscore=0



const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    //when there is no input value
    if(!guess || guess<0 ||guess>20){
     document.querySelector('.message').textContent='Wrong input'

     //wins
    }else if(guess===secretNumber){
        //document.querySelector('.message').textContent='correct number'
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent=secretNumber

        document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
}

// When guess is wrong
else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'high!' : ' low!';
      displayMessage(guess > secretNumber ? 'high!' : ' low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
       //document.querySelector('.message').textContent = ' You lost the game!';
      displayMessage(' You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }



//guess is high

//     else if(guess>secretNumber){
//         if (score > 1) {
//                 document.querySelector('.message').textContent = ' high!';
//                 score--;
//                 document.querySelector('.score').textContent = score;
//               } else {
//                 document.querySelector('.message').textContent = ' You lost the game!';
//                 document.querySelector('.score').textContent = 0;
//     }
// }
// //guess is low
//     else if(guess<secretNumber){
//         if (score > 1) {
//             document.querySelector('.message').textContent='low'
//             score--;
//             document.querySelector('.score').textContent = score;
//           } else {
//             document.querySelector('.message').textContent = ' You lost the game!';
//             document.querySelector('.score').textContent = 0;
//         }
//     }
}

)

document.querySelector('.again').addEventListener('click',function(){
     secretNumber =Math.trunc(Math.random() * 20) + 1
  score=20

  //document.querySelector('.message').textContent='Start guessing...'
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})