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

function playGame() {
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

    console.log("Human choice:", humanChoice);
    console.log("Computer choice:", computerChoice);
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  }
  for (i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice(); //assigns humans choice to humanSelection
    let computerSelection = getComputerChoice(); //assigsn computer choice to computerSelection

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("you win");
  } else if (computerScore > humanScore) {
    console.log("you lose");
  } else console.log("you tied");
}

playGame();
