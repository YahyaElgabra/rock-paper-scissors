const buttons = document.querySelectorAll("button");
const scoreboard = document.querySelector("#scoreboard");
const winner = document.createElement('p');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    });
});

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x == 2) {
        return "rock";
    } else if (x == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const rpsList = ["rock", "paper", "scissors"];
    let playerScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");
    let playerIndex = rpsList.indexOf(playerSelection);
    let computerIndex = rpsList.indexOf(computerSelection);

    if (playerScore.textContent == 5 || computerScore.textContent == 5) {
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        scoreboard.removeChild(winner);
    }

    if (playerIndex == (computerIndex + 1) % 3) { // player won
        playerScore.textContent = Number(playerScore.textContent) + 1;
        if (playerScore.textContent == 5) {
            winner.textContent = 'You Won!';
            scoreboard.appendChild(winner);
        }
    } else if (playerIndex == (computerIndex + 2) % 3) { // player lost
        computerScore.textContent = Number(computerScore.textContent) + 1;
        if (computerScore.textContent == 5) {
            winner.textContent = 'You Lost!';
            scoreboard.appendChild(winner);
        }
    }
}



/* 
function game() {
    pWin = 0;
    cWin = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("What is your choice?", "rock, paper, or scissors?");
        let verify = playerSelection.toLowerCase()
        while (verify != "rock" && verify != "paper" && verify != "scissors") {
            playerSelection = prompt("What is your choice?", "Please choose a valid option");
        }

        let round = playRound(playerSelection, computerSelection);

        if (round == 0) {
            console.log(`You won! ${playerSelection} beats ${computerSelection}`);
            pWin += 1;
        } else if (round == 1) {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            cWin += 1;
        } else {
            console.log(`It's a tie! You both chose ${playerSelection}`);
        }
    }
    if (pWin > cWin) {
        console.log("Congratulations! You won the match!");
    } else if (cWin > pWin) {
        console.log("Better luck next time");
    } else {
        console.log("You tied");
    }
}
*/
