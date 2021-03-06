//Contains all the JS for the game


//Variables to be used to track score and computer/player guesses

var wins = 0;

var losses = 0;

var chancesLeft = 10;

var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];

var computerGuess ="";

var playerGuess="";

//Action/Evaluations 

//preps the page so the html loads first and the player can see the instructions

//Captures keyboard input from the player 
document.onkeyup = function(event) {

	//Computer selects random letter if this is the first turn computerGuess will be equal to the starting empty string 
	if(computerGuess == ""){
		pickRandomLetter();
	}

	//Records the player's guess/keystroke 
	playerGuess = event.key;
	guessedLetters.push(playerGuess.toLowerCase());

	//Compare the player's guess to the computer's guess 
	compareGuess();

	//update the screen so the player can see results/action 
	updatePage();

	//Resets the game after each guess by the player 
	if (chancesLeft == 0){
		losses++;
		resetGame();
	}
}


//sets computerGuess variable to random choice from the array to start the game
function pickRandomLetter () {

	//should be 26 for 26 letter, but only 1 letter will be selected
	computerGuess = computerLetters[Math.floor(Math.random() * 26)]; 
}

//function to compare player and computer letter selection 
function compareGuess(){
	if (playerGuess.toLowerCase() == computerGuess){
		console.log("You guessed my letter!"); 
		wins++;		
	}
	else{
		console.log("Try another letter!"); 
		chancesLeft--;
	}

}


//Function to update the page for the player 
function updatePage(){
	displayGuessedLetters();
	displayScore();

}

//function to display guessed letters 
function displayGuessedLetters(){
	var displayletters = "<p>You have guessed: " + guessedLetters.toString() + "</p>";

	document.getElementById("guessesDisplay").innerHTML = displayletters;

}


//displaying the results of the score each round
function displayScore(){
	var score = "<p>wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>"+
	"<p>Chances Left: " + chancesLeft +"</p>"; 

//document.querySelector("scoredisplay").innerHTML = score;
//how to display the score to player
document.getElementById("scoreDisplay").innerHTML = score;

}

//function to reset variables for the game 
function resetGame(){
	chancesLeft = 10;
	computerGuess = "";
	guessedLetters= [];
}

