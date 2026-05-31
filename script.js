let container = document.querySelector(".container")
let generatorBtn = document.querySelector("#generator")
let generatorMessage = document.querySelector("#message")
let pens = document.querySelector(".pens")


function generateSketchpad(gridSize) {
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
}

function isValidInput(input) {
    const num = Number(input);
    return (
        input.trim() !== "" &&    // not empty
        Number.isInteger(num) &&  // must be an integer
        num >= 1 && num <= 100    // range check
    );
}

let setPenColor = () => {
    return "black"
}
generatorBtn.addEventListener("click", () => {
    generatorMessage.textContent = ""
    let input = prompt("Enter a number between 1 and 100")
    container.replaceChildren()

    if (isValidInput(input)) {
        generateSketchpad(Number(input))
        generatorMessage.textContent = `Sketchpad successfully generated with a square grid of ${input} cells`
        container.classList.add("sketch-pad")

    } else {
        generatorMessage.textContent = `Generation failed!\n "${input}" is not a valid number. Enter an integer between 1 and 100.`
        container.classList.remove("sketch-pad")
    }
})

container.addEventListener("mouseover", (e) => {
    source = e.target
    if (source.classList.contains("grid-cell")) {
        // div color has been changed using javascript to avoid conflict with existing class which also had a background color property in css
        source.style.backgroundColor = setPenColor(source)
    }
})

pens.addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
        return
    }
    switch (e.target.textContent) {
        case "Black":
            setPenColor = (source) => {
                source.style.opacity = 1
                return "black"
            }
            break;
        case "Random":
            setPenColor = (source) => {
                source.style.opacity = 1
                return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            }
            break;
        case "Erase":
            setPenColor = (source) => {
                if (source.style.opacity == "") {
                    source.style.opacity = 0.9
                } else {
                    source.style.opacity *= 0.9
                }
            }
            break;


    }
})
