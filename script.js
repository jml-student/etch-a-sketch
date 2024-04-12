const container = document.querySelector(".container");
let gridSize = prompt("Enter the grid size: ");

container.style.setProperty("--grid-rows", gridSize);
container.style.setProperty("--grid-cols", gridSize);

for (let i = 0; i < (gridSize * gridSize); i++) {
    let square = document.createElement("div");
    container.appendChild(square).className = "square";
}