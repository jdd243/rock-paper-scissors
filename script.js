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
    
    if (userChoice === "rock") return "rock";
    if (userChoice === "paper") return "paper";
    if (userChoice === "scissors") return "scissors";
}

// generate user choice with prompt


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

// input getUserChoice + ComputerChoice into playRound 
//const userSelection = getUserChoice(userInput);
//let compSelection = getComputerChoice();

//generate round result
//const roundResult = playRound(userChoice,compSelection)

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


}
playGame(0, 0)
