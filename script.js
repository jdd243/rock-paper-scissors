// pseudo code

// steps
//  #1 generate random computer choice (getComputerChoice)
//  #2 get user input (getUserChoice)
//  #3 output result (computerScore) vs (userScore)


//  Step 1

//  If number 1  then computer choice = rock
//  If number 2 then computer choice = paper
//  If number 3 then computer choice = scissors

//  step 2
//  if user choice 1 return = rock
//  if user choice 2 return = paper
//  if user choice 3 return = scissors

const rock = 1;
const paper = 2;
const scissors = 3;

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === rock) return "rock";
    if (computerChoice === paper) return "paper";
    if (computerChoice === scissors) return "scissors";
}

function getUserChoice(userChoice) {

    if (userChoice === rock) return "rock";
    if (userChoice === paper) return "paper";
    if (userChoice === scissors) return "scissors";
}

const userInput = prompt("Rock, paper, scissors!");
console.log(getUserChoice(userInput));