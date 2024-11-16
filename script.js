// gets the computer's choice
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// gets human choice
function getHumanChoice() {
  let choice = prompt("Choose Rock, Paper or Scissors");

  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("you win!");
    humanScore++;
  } else if (
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    console.log("you lose!");
    computerScore++;
  } else if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log("you tied");
  }
}

const humanSelection = getHumanChoice(); //assigns humans choice to humanSelection
const computerSelection = getComputerChoice(); //assigsn computer choice to computerSelection

playRound(humanSelection, computerSelection);

console.log("Human choice:", humanSelection);
console.log("Computer choice:", computerSelection);
console.log("Human Score: ", humanScore); //must be called after playRound
console.log("Computer Score: ", computerScore); //must be called after playRound
