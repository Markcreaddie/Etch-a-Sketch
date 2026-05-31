let container = document.querySelector(".container")
let gridSize = 10


for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement("div")
    gridRow.className = "grid-row"
    for (let j = 0; j < gridSize; j++) {
        let gridCell = document.createElement("div")
        gridCell.className = "grid-cell"
        gridRow.appendChild(gridCell)

    }
    container.appendChild(gridRow)
}