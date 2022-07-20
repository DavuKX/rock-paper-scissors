const CHOICES = {"Paper": 0, "Rock": 1, "Scissors": 2};
let winsPlayer = 0;
let winsComputer = 0;


function getKeyFromValue(value)
{
    return Object.keys(CHOICES).find(key => CHOICES[key] === value);
}


function getComputerChoice(CHOICES) 
{
    let choice = Math.floor(Math.random() * 3);;
    return choice;
}

function playRound(playerSelection, computerSelection) 
{
    if ((playerSelection - computerSelection) === 0)
        return 0; // 0 for tie
    
    else if ((playerSelection - computerSelection) === 1)
        return 1; // 1 for lose
    
    else if ((playerSelection - computerSelection) === -1) 
        return 2; // 2 for win
    
    else if ((playerSelection - computerSelection) === -2)
        return 1;
    
    else
        return 2;
}


function playGame(e) {

    let computerChoice = getComputerChoice();
    let playerChoice   = CHOICES[this.childNodes[3].textContent];
    let result         = playRound(playerChoice, computerChoice);
    let players        = document.querySelector('#players');
    let player         = players.childNodes[1];
    let computer       = players.childNodes[3];
    let playerScore    = player.childNodes[5];
    let computerScore  = computer.childNodes[5];
    let score          = document.getElementById('result-text');

    score.textContent = ""
    document.getElementById('player-selection').src    = `static/images/${getKeyFromValue(playerChoice).toLowerCase()}.png`;
    document.getElementById('computer-selection').src  = `static/images/${getKeyFromValue(computerChoice).toLowerCase()}.png`;
    

    if (result == 0)
        score.textContent = "It's a tie!";
    
    else if (result == 1)
    {
        winsComputer             += 1;
        computerScore.textContent = `Computer: ${winsComputer}`;
        score.textContent         = 'You lose!';

        if (winsComputer === 5) 
        {
            winsPlayer   = 0;
            winsComputer = 0;
            computerScore.textContent = `Computer: ${winsComputer}`;
            playerScore.textContent   = `Computer: ${winsPlayer}`;
            score.textContent         = "The computer wins the match";
        };

    }

    else if (result == 2)
    {
        winsPlayer += 1;
        playerScore.textContent = `Player: ${winsPlayer}`;
        score.textContent = "You win!";

        if (winsPlayer === 5) 
        {
            winsPlayer   = 0;
            winsComputer = 0;
            playerScore.textContent   = `Computer: ${winsPlayer}`;
            computerScore.textContent = `Computer: ${winsComputer}`;
            score.textContent         = "The player wins the match!";
        };

    };
    e.stopPropagation();
};

const choices = document.querySelectorAll('.choice')

choices.forEach(choice => choice.addEventListener('click', playGame, {
    capture: false,
}));