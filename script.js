function getComputerChoice() {
    let computerChoice = undefined
    let x = Math.random();
    if (x < 0.33) {
        computerChoice = "rock";
    } else if (x > 0.33 && x < 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log(computerChoice)
    console.log(x)
}

getComputerChoice()