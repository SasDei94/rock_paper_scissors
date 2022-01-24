const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let playerScore = 0;
let compScore = 0;

function computerPlay() {

    let compChoice = (Math.random());   

    if (compChoice < 0.34) {
        return "rock"
        
    } else if (compChoice <= 0.67) {
        return "paper"
    
    } else {
        return "scissors"
    }
}

function userChoice() {

	var userInput = prompt("Please enter your choice of either rock, paper or scissors. To exit, hit the 'Cancel' button.");
	return userInput.toLowerCase();
}

function rockpaperscissors(playerChoice, compChoice) {

    var compChoice = computerPlay();

    var playerChoice = userChoice();

    if (playerScore == 5) {
        alert("You already won! Press F5 for another game.");
    }

    else if (compScore == 5) {
        alert("You already lost! Press F5 for another game.")
    }


    if (playerChoice == compChoice) {
        alert("Tie!");
    

    } else if (playerChoice == "rock" && compChoice == "scissors") {
        playerScore ++;
        alert("You won this round!");
    
    
    } else if (playerChoice == "scissors" && compChoice == "rock") {
        compScore ++;
        alert("You lost this round!");
    
     
    } else if (playerChoice == "paper" && compChoice == "rock") {
        playerScore ++;
        alert("You won this round!");
    
    
    } else if (playerChoice == "rock" && compChoice == "paper") {
        compScore ++;
        alert("You lost this round!");


    } else if (playerChoice == "scissors" && compChoice == "paper") {
        playerScore ++;
        alert("You won this round!");


    } else if (playerChoice == "paper" && compChoice == "scissors") {
        compScore ++;
        alert("You lost this round!");
    }
}