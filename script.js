const divContainer = document.querySelector(`#div_container`);
const button = document.querySelector(`#button`);
const colors = [
  `#BA7BA1`,
  `#C28CAE`,
  `#D0ABA0`,
  `#DEC4A1`,
  `#DEC4A1`,
  `#EDCF8E`,
];
let gridSize = 16;

let createGrid = () => {
  divContainer.style.gridTemplateColumns = `repeat (${gridSize},1fr)`;
  divContainer.style.gridTemplateRows = `repeat (${gridSize},1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    let div = document.createElement(`div`);
    div.className = "div-game";
    div.addEventListener(`mouseenter`, function () {
      if (div.style.backgroundColor == ``) {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        div.style.backgroundColor = randomColor;
      }
    });
    divContainer.appendChild(div);
  }
};

let restart = () => {
  gridSize = prompt(`How many divs?`);
  deleteGrid();
  createGrid();
};

let deleteGrid = () => {
  while (divContainer.hasChildNodes) {
    divContainer.removeChild(divContainer.firstChild);
  }
};

button.addEventListener(`click`, restart);

createGrid();
