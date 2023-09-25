const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie";
  } else if (result == "player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validateInput = false;
  while (validateInput == false) {
    const choice = prompt("Rock Paper Scissors");
    if (choice == null) {
      continue;
    }

    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validateInput = true;
      return choiceInLower;
    }
  }
}

function game() {
  console.log("Welcome");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getComputerChoice();
    const computerSelection = getPlayerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
