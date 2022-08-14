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
    const rps = ["rock", "paper", "scissors"];
    playerSelection = playerSelection.toLowerCase();
    let playerIndex = rps.indexOf(playerSelection);
    let computerIndex = rps.indexOf(computerSelection);

    if (playerIndex == (computerIndex + 1) % 3) {
        return 0; // player won
    } else if (playerIndex == (computerIndex - 1) % 3) {
        return 1; // player lost
    } else {
        return 2; // tie
    }
}

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