
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

function playGame(userScore, compScore) {
    
    let userScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    const roundsToPlay = 5;

    const buttons = document.querySelectorAll('.player-selection');

    buttons.forEach(button => {
        button.addEventListener("click", (element) =>{
            if (roundsPlayed >= roundsToPlay) return;

            const userChoice = element.currentTarget.value;
            
        })
    })




}

  


