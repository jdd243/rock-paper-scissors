
function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[i];   
}

function getUserChoice(userChoice) {

    userChoice = userChoice.toLowerCase();

    if (userChoice === "rock") return "rock";
    if (userChoice === "paper") return "paper";
    if (userChoice === "scissors") return "scissors";
}

function playRound(userChoice,computerChoice) {

    if (userChoice === computerChoice) {
    return "tie!";}
    else if (
    (userChoice === "rock" && computerChoice === "scissors")||
    (userChoice === "paper" && computerChoice === "rock")||
    (userChoice === "scissors" && computerChoice === "paper")
    ){
            return "you win!"
        } 
    else return "Computer wins!"
}

function playGame() {
    
    let userScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    const roundsToPlay = 5;

    const playerScoreEl = document.getElementById("player-score");
    const computerScoreEl = document.getElementById("computer-score");
    const roundsPlayedEl = document.getElementById("rounds-played");
    const winnerMessageEl = document.getElementById("winner-message");
    const controlEl = document.getElementById("controls");

    function resetGame() {
    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;
    roundsPlayedEl.textContent = 0;
    winnerMessageEl.textContent = "";
    controlEl.innerHTML = "";
    }

    const buttons = document.querySelectorAll('.player-selection');
    buttons.forEach(button => {
        button.addEventListener("click", (element) => {
            if (roundsPlayed >= roundsToPlay) return;

            const userChoice = element.currentTarget.value;
            const compSelection = getComputerChoice();
            const roundResults = playRound(userChoice, compSelection);

            if (roundResults === "you win!") userScore++;
            else if (roundResults === "Computer wins!") computerScore++;
            roundsPlayed++;
            
            playerScoreEl.textContent = userScore;
            computerScoreEl.textContent = computerScore;
            roundsPlayedEl.textContent = roundsPlayed;

            if(roundsPlayed === roundsToPlay) {            

                if (userScore > computerScore) winnerMessageEl.textContent = "You win!";
                else if (userScore < computerScore) winnerMessageEl.textContent = "Computer Wins!";
                else winnerMessageEl.textContent = "Tie game!";
               
                const restartBtn = document.createElement("button");
                restartBtn.id = "new-game";
                restartBtn.textContent = "Play again!";
                restartBtn.addEventListener("click", resetGame);
                controlEl.appendChild(restartBtn);
            }                       
        });
    });


}
playGame()

  


