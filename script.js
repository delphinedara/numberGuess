var computerGuess;
var userGuessLog =[];
var attempts = 0;
var maxGuesses =10;

function easyMode(){
  maxGuesses=10;
}

function hardMode(){
  maxGuesses=5;
}

//NewGame Clicked - Reload the page and start a new game with a new random number
function newGame() {
  window.location.reload();
}

//computer picks  a random number
function init() {
  computerGuess= Math.floor (Math.random() * 100 + 1);
  // console.log(computerGuess);
  document.getElementById('newGameButton').style.display = 'none';
}

//user input and compare guess
function compareGuess() {
  var userGuess =" " + document.getElementById('inputBox').value;
  // console.log(userGuess);

  userGuessLog.push(userGuess);
  // console.log(userGuessLog);
  document.getElementById('guessLog').innerHTML = userGuessLog;
  attempts ++;
  document.getElementById('attempts').innerHTML = attempts;

  if (userGuessLog.length< maxGuesses){

    if (userGuess > computerGuess){
      document.getElementById('textOutput').innerHTML="Your guess is too high";
      document.getElementById('inputBox').value="";
      } else if(userGuess < computerGuess) {
      document.getElementById('textOutput').innerHTML="Your guess is too low";
      document.getElementById('inputBox').value="";
      } else{
      document.getElementById('textOutput').innerHTML="Correct!";
      document.getElementById('inputBox').value="";
     }

  } else {
    if (userGuess > computerGuess){
      document.getElementById('textOutput').innerHTML = 'Reached maximum attempts, try again!';
    } else if (userGuess < computerGuess){
      document.getElementById('textOutput').innerHTML = "Reached maximum attempts, try again!";
    } else {
      document.getElementById('textOutput').innerHTML = "Correct!";
    }
  }
  
}