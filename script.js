const button = document.querySelector(`button`);
const gameContainer = document.querySelector(`#game_container`);
//Ask user how many size && start the creatorDiv
let promptToStart = () => {
  let numberOfDivs = prompt(`How many divs?`);
  creatorDiv(numberOfDivs);
};
//Takes input from promptToStart() and creates the game size
let creatorDiv = (numberDiv) => {
  for (let i = numberDiv; i < numberDiv; i++) {
    let div = document.createElement(`div`);
    gameDiv.append(div);
    console.log(`red`);
  }
};

button.addEventListener(`click`, promptToStart);
