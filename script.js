function getComputerChoice() {

    let x = Math.random();
    if (x < 0.33) {
        return("rock");
    } else if (x > 0.33 && x < 0.66) {
        return("paper");
    } else {
        return("scissors");
    }
}

function playRound(userChoice, computerSelection) {
    if (userChoice == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors!");
        playerWin = playerWin + 1;
        console.log(`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper!");
        computerWin = computerWin + 1;
        console.log(`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock!");
        computerWin = computerWin + 1;
        console.log(`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper!");
        playerWin = playerWin + 1;
        console.log(`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock!");
        playerWin = playerWin + 1;
        console.log(`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors!");
        computerWin = computerWin + 1;
        console.log(`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == computerSelection) {
        console.log("It's a draw!")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Rock, Paper, Scissors? 3...2...1...").toLowerCase();

        let computerSelection = getComputerChoice();

        if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
            console.log("Invalid attack!");
            i--;
        }

        console.log("Computer chose "+computerSelection)
        
        playRound(userChoice, computerSelection)
    }
}

playerWin = 0
computerWin = 0

console.log(game());



