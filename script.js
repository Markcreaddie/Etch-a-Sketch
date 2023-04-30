
const body = document.querySelector('body')
const button = document.querySelector('button')


//create parent grid
const grid = document.createElement('div');
grid.className= "grid";

function drawGrid(rows,columns){
    //separate the grid using rows and columns for easy styling in css
    for (let i=0; i<columns; i++){
        let column= document.createElement('div');
        column.className= 'column';
        for (let j=0; j<rows;j++){
            let row=document.createElement('div');
            row.className= 'row';
            column.appendChild(row)
        }
        grid.appendChild(column);
    }
    body.appendChild(grid)
}

function getRandomRgbNum(){
    return Math.floor(Math.random()*255)
}

function hoverEffect(){
    //hovering over a grid changes it to a completely random RGB value
    const squares= document.querySelectorAll('.row');
    squares.forEach((square)=>{
    square.addEventListener('mouseover',()=>{
        square.style.backgroundColor= `rgb(${getRandomRgbNum()},${getRandomRgbNum()},${getRandomRgbNum()})`
    })
})
}

//user should be able to set and adjust the size of their grid
button.addEventListener('click',()=>{
    gridSize=prompt('How many squares do you want per side for your sketchpad?')
    //clear grid
    grid.textContent=''
    if (gridSize>100){
        //A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing.
        grid.textContent='Squares must be less than 100'
    }else{
        let columns=gridSize
        let rows=gridSize
        drawGrid(rows,columns)
        hoverEffect()
    }
})






