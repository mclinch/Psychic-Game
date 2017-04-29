$(document).ready(function(){
  var letters = [
  'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',
  'z','x','c','v','b','n','m'];

  var wins = 0;
  var losses = 0;
  var guesses = 9;

 
var chooseLetter = letters[Math.floor(Math.random() * letters.length)]
  console.log(chooseLetter)


   // When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === chooseLetter){
        wins++;
    } else {
        guesses--;
      }

    if(guesses === 0){
        losses++;
        guesses = 9;
        

    }
   
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guesses;
    document.getElementById('chosen').innerHTML = "Letters you have chosen: " + userGuess;
}
















});

