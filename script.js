let container = document.querySelector(".container")
let gridSize = 20


for (let i = 0; i < gridSize; i++) {
    let Row = document.createElement("div")
    Row.className = "grid-row"
    for (let j = 0; j < gridSize; j++) {
        let Cell = document.createElement("div")
        Cell.className = "grid-cell"
        Row.appendChild(Cell)

    }
    container.appendChild(Row)
}

container.addEventListener("mouseover", (e) => {
    source = e.target
    if (source.classList.contains("grid-cell")) {
        source.style.backgroundColor = "aquamarine"
    }
})