let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guess");
const lastResult = document.querySelector(".previousguess");
const remainGuess = document.querySelector(".remainingguess");
const lowOrHigh = document.querySelector(".lowORhigh");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess > 100 || guess <= 0) {
    alert("Please add a valid Number");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`You Guessed it right`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is TOOOO Low`);
  } else if (guess > randomNum) {
    displayMessage(`Number is TOOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  lastResult.innerHTML += `${guess},  `;
  numGuess++;
  remainGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame(message) {
  document.getElementById("newGame").addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    lastResult.innerHTML = "";
    remainGuess.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playgame = true;
  });
}

function endGame(message) {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  startOver.appendChild(p);
  lowOrHigh.innerHTML = "";
  playgame = false;
  newGame();
}
