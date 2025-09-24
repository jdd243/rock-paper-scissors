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

//step 1

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[i];   
}
console.log(getComputerChoice())

//step 2

function getUserChoice(userChoice) {
    
    if (userChoice === "rock") return "rock";
    if (userChoice === "paper") return "paper";
    if (userChoice === "scissors") return "scissors";
}


let userInput = prompt("rock, paper, scissors!");
let userChoice = getUserChoice(userInput);
console.log(getUserChoice(userChoice))

//step 3

let userScore = 0;
let computerScore = 0;



function playRound(userChoice,computerScore) {
    if (userChoice === getComputerChoice()) return [userScore += 1, computerScore += 1];
}

console.log(playRound(userScore,computerScore));