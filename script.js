const container = document.getElementById('container')
const score = document.getElementById('score')
const computer = document.getElementById('computer')
const win = document.getElementById('win')

let playerWin = 0
let computerWin = 0


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

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => {
    game(userChoice = "rock");
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => {
    game(userChoice = "paper");
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => {
    game(userChoice = "scissors");
});


function playRound(userChoice, computerSelection) {
    if (userChoice == "rock" && computerSelection == "scissors") {
        container.textContent = ("You win! Rock beats Scissors!");
        playerWin = playerWin + 1;
        score.textContent = (`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == "paper" && computerSelection == "scissors") {
        container.textContent = ("You lose! Scissors beats Paper!");
        computerWin = computerWin + 1;
        score.textContent = (`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == "rock" && computerSelection == "paper") {
        container.textContent = ("You lose! Paper beats Rock!");
        computerWin = computerWin + 1;
        score.textContent = (`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == "scissors" && computerSelection == "paper") {
        container.textContent = ("You Win! Scissors beats Paper!");
        playerWin = playerWin + 1;
        score.textContent = (`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == "paper" && computerSelection == "rock") {
        container.textContent = ("You Win! Paper beats Rock!");
        playerWin = playerWin + 1;
        score.textContent = (`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == "scissors" && computerSelection == "rock") {
        container.textContent = ("You lose! Rock beats Scissors!");
        computerWin = computerWin + 1;
        score.textContent = (`Score: ${playerWin} ${"-"} ${computerWin}`);
    } else if (userChoice == computerSelection) {
        container.textContent = ("It's a draw!")
    }

    if (playerWin == 5 || computerWin == 5) {
        if (playerWin == 5) {
            win.textContent = "You have beaten the computer!";
        } else if (computerWin == 5) {
            win.textContent = "The computer has beaten you!";
        }

        const playButton = document.createElement('button');
        playButton.classList.add('playButton');
        playButton.textContent = 'Play again?';

        win.appendChild(playButton)

        playButton.addEventListener('click', () => {
            playAgain()
        })
    
    }
}

function game(userChoice, computerSelection) {
    computerSelection = getComputerChoice();

    computer.textContent = ("Computer chose "+computerSelection)
        
    playRound(userChoice, computerSelection)
}

function playAgain() {
    playerWin = 0;
    computerWin = 0;
    container.textContent = "";
    score.textContent = "";
    computer.textContent = "";
    win.textContent = "";

    playButton.remove()
}



