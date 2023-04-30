
const body = document.querySelector('body')
const setGridSize = document.querySelector('.setGridSize')
const pens = document.querySelectorAll('.pens > button')
let color


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



function getRGB(str){
    return str.split(/[(,)]/)
}

//user should be able to set and adjust the size of their grid
setGridSize.addEventListener('click',()=>{
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
    }

})

pens.forEach((pen)=>{pen.addEventListener('click', (e)=>{
    color= pen.textContent.toLowerCase();
    hoverEffect(color)
    })
})



function hoverEffect(color){
    //hovering over a grid changes it to a completely random RGB value
    let squares= document.querySelectorAll('.row');
    squares.forEach((square)=>{
    square.addEventListener('mouseover',(e)=>{
        const colors={
            'black':`rgb(0,0,0)`,
            'rainbow':`rgb(${getRandomRgbNum()},${getRandomRgbNum()},${getRandomRgbNum()})`,
            'erase': `rgb(250,235,215)`
        }
        if (color==='black'){
            square.style.backgroundColor= colors.black
        }else if (color==='rainbow'){
            square.style.backgroundColor= colors.rainbow
        }else if (color==='erase'){
            square.style.backgroundColor= colors.erase
        }

     
        
    })
})
}





