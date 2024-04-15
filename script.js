const container = document.querySelector(".container"); 
let allSquares = document.querySelectorAll(".square");

function createGrid(gridSize) {
    document.querySelectorAll(".square").forEach(function(square) {
        square.parentNode.removeChild(square);
    });

    container.style.setProperty("--grid-rows", gridSize);
    container.style.setProperty("--grid-cols", gridSize);

    for (let i = 0; i < (gridSize * gridSize); i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        container.appendChild(square).className = "square";

        let opacity = 1;

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = randomBackGroundColor();
            opacity -= 0.1;
            square.style.opacity = opacity;
        });
    }
}

function randomBackGroundColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return ("rgb(" + r + "," + g + "," + b + ")");
}

const gridSizeButton = document.querySelector(".gridSize");

gridSizeButton.addEventListener("click", () => {
    let gridSizeInput = prompt("Enter the grid size: ");
    if (gridSizeInput > 100 || gridSizeInput <= 0) {
        alert("Invalid number. Please enter a number between 1 and 100.");   
    } else {
        createGrid(gridSizeInput);
    };
})

createGrid(16);

