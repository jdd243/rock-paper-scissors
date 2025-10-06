
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
    

    for(let i = 0; i < 5; i++){
    let userInput = prompt("rock, paper, scissors!");
    let userChoice = getUserChoice(userInput)
    let compSelection = getComputerChoice();
    let roundResult = playRound(userChoice, compSelection)
    
    console.log(`Round: ${i + 1}`);
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${compSelection}`);


    if (roundResult === "you win!"){
        userScore++; }

    else if (roundResult === "Computer wins!"){
        compScore++; }

    console.log(`User Score: ${userScore}`);
    console.log(`Computer Score: ${compScore}`);

    }

    if ( userScore > compScore ) {
        alert("You won the game!")
    }
    else if ( userScore === compScore ) {
        alert("Game tied!")
    }
    else alert("You lose.")


}

  


