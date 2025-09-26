// pseudo code

// steps
//  #1 generate random computer choice (getComputerChoice)
//  #2 get user input (getUserChoice)
//  #3 output result (computerScore) vs (userScore)


//  Step 1 comp choice

//  If number 1  then computer choice = rock
//  If number 2 then computer choice = paper
//  If number 3 then computer choice = scissors

//  step 2 user choice

//  if user choice 1 return = rock
//  if user choice 2 return = paper
//  if user choice 3 return = scissors

//  step 3 play round

//  compare choices from user and comp.
//  keep score of user and comp
// 

//step 1 generate random compChoice
function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[i];   
}

//step 2 generate userChoice 
function getUserChoice(userChoice) {

    userChoice = userChoice.toLowerCase();

    if (userChoice === "rock") return "rock";
    if (userChoice === "paper") return "paper";
    if (userChoice === "scissors") return "scissors";
}

//step 3, play a round tie/win/loose (compare choices)

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

//  Step 4, loop play round 5 times and declare winner

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

//  Start game at the press of the button

document.getElementById("start-game").addEventListener("click", () => { playGame(0, 0) });
  


