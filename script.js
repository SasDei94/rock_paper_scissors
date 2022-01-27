let playerScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll("input")

function computerPlay() {

    let compChoice = (Math.random())

    if (compChoice < 0.34) {
        return "rock"
        
    } else if (compChoice <= 0.67) {
        return "paper"
    
    } else {
        return "scissors"
    }
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function rockpaperscissors(playerChoice) {

    let compChoice = computerPlay();

    let result = ""


    if ((playerChoice == "rock" && compChoice == "scissors") ||
        (playerChoice == "scissors" && compChoice == "paper") ||
        (playerChoice == "paper" && compChoice == "rock")) {
        
        playerScore += 1
        result = ("You win! " + playerChoice + " beats " + compChoice
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)

        if (playerScore == 5) {
            result += "<br><br>You won the game! <br>Press F5 or click on the \"New Game\" button to play again."
            disableButtons()
        }
    }
    else if (playerChoice == compChoice) {
        result = ("It\"s a tie. You both chose " + playerChoice
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)
    }
    else {
        compScore += 1
        result = ("You lose! " + compChoice + " beats " + playerChoice
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)

        if (compScore == 5) {
            result += "<br><br>The computer won the game! <br>Press F5 or click on the \"New Game\" button to play again."
            disableButtons()
        }
    }

    document.getElementById("result").innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        rockpaperscissors(button.value)
    })
})