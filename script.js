let computerChoice = undefined

function getComputerChoice() {

    let x = Math.random();
    if (x < 0.33) {
        computerChoice = "rock";
    } else if (x > 0.33 && x < 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
}

getComputerChoice()

console.log(computerChoice)

let userChoice = prompt("Rock, Paper, Scissors? 3...2...1...");
userChoice = userChoice.toLowerCase();

if (userChoice == "rock" && computerChoice == "scissors") {
    console.log("win");
} else {
    console.log("lose");
}