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
    } else if (userChoice == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper!");
    } else if (userChoice == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock!");
    } else if (userChoice == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper!");
    } else if (userChoice == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock!");
    } else if (userChoice == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors!");
    } else if (userChoice == computerSelection) {
        console.log("It's a draw!")
    }
}

let computerSelection = getComputerChoice();

let userChoice = prompt("Rock, Paper, Scissors? 3...2...1...");

console.log("Computer chose "+computerSelection)

console.log(playRound(userChoice, computerSelection));



