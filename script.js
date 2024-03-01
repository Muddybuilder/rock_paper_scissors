const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const choices = [ROCK, PAPER, SCISSORS];

const relationMap = new Map()
relationMap.set(`${ROCK}|${PAPER}`, false);
relationMap.set(`${PAPER}|${ROCK}`, true);

relationMap.set(`${PAPER}|${SCISSORS}`, false);
relationMap.set(`${SCISSORS}|${PAPER}`, true);

relationMap.set(`${SCISSORS}|${ROCK}`, false);
relationMap.set(`${ROCK}|${SCISSORS}`, true);

function getComputerChoice() {
    // randomly selects an array element
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(round, playerSelection, computerSelection) {
    let formattedInput = playerSelection.toLowerCase()
    if (!choices.includes(formattedInput)) {
        return new Error("Invalid input!");
    }
    else {
        const query = `${formattedInput}|${computerSelection}`
        // doesn't contain query -> same
        if (!relationMap.has(query)) {

            return `Round ${round}: Draw!\nYour selection: ${formattedInput}, Computer's Selection: ${computerSelection}`;
        }
        // contains query -> win or lose
        else {
            if (relationMap.get(query)) {
                return `Round ${round}:Win!\nYour selection: ${formattedInput}, Computer's Selection: ${computerSelection}`;
            }
            else {
                return `Round ${round}:Lose!\nYour selection: ${formattedInput}, Computer's Selection: ${computerSelection}`;
            }
        }
    }
}

function playGame(){
    let playNumber = 5;

    for (let round = 1; round <= playNumber; round++) {
        const playerSelection =  prompt("Your input (rock | paper | scissors):");
        const computerSelection = getComputerChoice();

        console.log(playRound(round,playerSelection,computerSelection));
        
    }

    

}

playGame();