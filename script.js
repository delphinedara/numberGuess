var computerGuess;
var userGuessLog =[];
var attempts = 0;
var maxGuesses =10;

function gameEnded(){
  document.getElementById('newGameButton').style.display = 'inline';
  document.getElementById('easyButton').style.display= 'none';
  document.getElementById('hardButton').style.display ='none';
  document.getElementById('inputBox').setAttribute('readonly' , 'readonly');
}

function easyMode(){
  maxGuesses=10;
  document.getElementById('easyButton').className= 'activeButton';
  document.getElementById('hardButton'.className ='');
}

function hardMode(){
  maxGuesses=5;
  document.getElementById('hardButton').className= 'activeButton';
  document.getElementById('easyButton'.className ='');
}

function newGame() {
  window.location.reload();
}


function init() {
  computerGuess= Math.floor (Math.random() * 100 + 1);
  document.getElementById('newGameButton').style.display = 'none';
}

function compareGuess() {
  var userGuess =" " + document.getElementById('inputBox').value;
  userGuessLog.push(userGuess);
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
      document.getElementById('textOutput').innerHTML="Correct! You got it in" + attempts + " attempts.";
      document.getElementById('container').style.backgroundColor = 'green';
      gameEnded();
     }

  } else {
    if (userGuess > computerGuess){
      document.getElementById('textOutput').innerHTML = 'Reached maximum attempts, try again!' + "<br> The number was " + computerGuess;
      document.getElementById('container').style.backgroundColor = '#e82c4e';
      gameEnded();
    } else if (userGuess < computerGuess){
      document.getElementById('textOutput').innerHTML = "Reached maximum attempts, try again!" + "<br> The number was " + computerGuess;
      document.getElementById('container').style.backgroundColor = '#e82c4e';
      gameEnded();
    } else {
      document.getElementById('textOutput').innerHTML = "Correct! You got it in" + attempts + " attempts.";
      document.getElementById('container').style.backgroundColor = 'green';
      gameEnded();
    }
  }
  
}