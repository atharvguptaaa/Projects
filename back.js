let randomNumber = parseInt(Math.random() * 101);
console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
// const tag=document.querySelector("#guess")

const p = document.createElement('p');
let guessCount = 0;
let arr = [];
let isPlaying = true;

if (isPlaying) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validation(guess);
  });
}

function validation(guess) {
  if (guess < 0 || guess > 100 || isNaN(guess)) {
    alert('invalid entry');
  } else {
    arr.push(guess);
  
    checkGuess(guess);
    displayGuess(guess);
    
    
    // { 
    //   // console.log("beek");
    //   checkGuess(guess);
    //   displayGuess(guess);
    //   // displayMessage(`Game over. The random number was ${randomNumber}`);
    //   // console.log("van");
    //   // endgame();
    // } else {
    //   checkGuess(guess);
    //   displayGuess(guess);
     
    // }
  }
}

function checkGuess(guess) {

  if (guess === randomNumber) {
    displayMessage("You guessed the number right!");
    // console.log("logan");
    // tag.innerHTML="WINNER";
    endgame();
    
  }
  else if(guess!==randomNumber && guessCount==9){
    // console.log("chicken");
      displayMessage(`Game over. The random number was ${randomNumber}`);
      endgame();
  }
  else if (guess > randomNumber) {
    displayMessage(`The number is lesser than ${guess}`);
  } 

  else {
    displayMessage(`The number is greater than ${guess}`);
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  guessCount++;
  // console.log(guessCount)
  remaining.innerHTML = `${10 - guessCount}`;
}

function endgame() {
  // console.log("cric");
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button'); //f ar9d
  p.innerHTML = `<h1 id="starter" style="background-color: #161616;">Start New Game</h1>`;
  startOver.appendChild(p);
  isPlaying = false;
  newGame();
}

function newGame() {
  const startAgain = document.querySelector('#starter');
  startAgain.addEventListener('click', () => {
    randomNumber = parseInt(Math.random() * 101);
    userInput.removeAttribute('disabled');
    userInput.value = '';
    guessCount = 0;
    arr= [];
    guessSlot.innerHTML=""
    remaining,innerHTML=""
    lowOrHi.innerHTML=""
    startOver.removeChild(p);
    isPlaying = true;
  });
}
