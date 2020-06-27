const button = document.querySelector(`button`);
const divContainer = document.querySelector(`#div_container`);
const colors = [
  `#BA7BA1`,
  `#C28CAE`,
  `#D0ABA0`,
  `#DEC4A1`,
  `#DEC4A1`,
  `#EDCF8E`,
];
//Ask user how many size && start the creatorDiv
let promptToStart = () => {
  let numberOfDivs = prompt(`How many divs?`);
  creatorDiv(numberOfDivs);
};
//Takes input from promptToStart() and creates the game size
let creatorDiv = (numberDiv) => {
  let j = 0;
  for (let i = 0; i < numberDiv; i++) {
    j++;
    let div = document.createElement(`div`);
    div.classList.add(`div-game`);
    div.id = `div-game${i}`;
    divContainer.append(div);
  }
  const div_game = document.querySelectorAll(`.div-game`);
  return div_game;
};

//Randomize the colors and gives one to the div
let changeColor = () => {
  div_id.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
};
//EventsListeners;
button.addEventListener(`click`, promptToStart);
div_game.addEventListener(`onmouseover`, changeColor(creatorDiv()));
