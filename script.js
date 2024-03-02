const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const choices = [ROCK, PAPER, SCISSORS];

// hashmap to store rock-paper-scissors relationship
const relationMap = new Map();
relationMap.set(`${ROCK}|${PAPER}`, false);
relationMap.set(`${PAPER}|${ROCK}`, true);

relationMap.set(`${PAPER}|${SCISSORS}`, false);
relationMap.set(`${SCISSORS}|${PAPER}`, true);

relationMap.set(`${SCISSORS}|${ROCK}`, false);
relationMap.set(`${ROCK}|${SCISSORS}`, true);

function getComputerChoice() {
  // randomly selects an array element
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  let formattedInput = playerSelection.toLowerCase();
  if (!choices.includes(formattedInput)) {
    return new Error("Invalid input!");
  } else {
    const query = `${formattedInput}|${computerSelection}`;
    // doesn't contain query -> draw
    if (!relationMap.has(query)) {
      return `Draw!\nYour selection: ${formattedInput}, Computer's Selection: ${computerSelection}`;
    }
    // contains query -> win or lose
    else {
      if (relationMap.get(query)) {
        return `Win!\nYour selection: ${formattedInput}, Computer's Selection: ${computerSelection}`;
      } else {
        return `Lose!\nYour selection: ${formattedInput}, Computer's Selection: ${computerSelection}`;
      }
    }
  }
}

const btns = document.querySelectorAll(".btn");

const container = document.querySelector(".container");
const div = document.createElement("div");
div.classList.add("result-display");

container.appendChild(div);

btns.forEach((btn) => {
  let text = btn.id;

  btn.addEventListener(
    "click",
    () => (div.textContent = playRound(text, getComputerChoice()))
  );
});
