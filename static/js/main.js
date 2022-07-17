const CHOICES = {"paper": 0, "rock": 1, "scissors": 2};

function getKeyFromValue(value) {
    return Object.keys(CHOICES).find(key => CHOICES[key] === value);
}

function getComputerChoice(CHOICES) {
    let choice;
    choice = Math.floor(Math.random() * 3);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = CHOICES[playerSelection];
    if ((playerSelection - computerSelection) === 0) {
        return "Is a tie!"
    } else if ((playerSelection - computerSelection) === 1) {
        return `You lose! ${getKeyFromValue(computerSelection)} beats ${getKeyFromValue(playerSelection)}`;
    } else if ((playerSelection - computerSelection) === -1) {
        return `You win! ${getKeyFromValue(playerSelection)} beats ${getKeyFromValue(computerSelection)}`;
    } else if ((playerSelection - computerSelection) === -2) {
        return `You lose! ${getKeyFromValue(computerSelection)} beats ${getKeyFromValue(playerSelection)}`;
    } else {
        return `You win! ${getKeyFromValue(playerSelection)} beats ${getKeyFromValue(computerSelection)}`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

    