
const body = document.querySelector('body')
const setGridSize = document.querySelector('.setGridSize')
const pens = document.querySelectorAll('.pens > button')
let color
let squares


//create parent grid
const grid = document.createElement('div');
const response =document.createElement('div')
grid.className= "grid";
response.className="response"

function drawGrid(rows=10,columns=10){
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
    squares= document.querySelectorAll('.row');
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
    if (!parseInt(gridSize)){
        response.textContent= 'Enter a valid number'
        grid.appendChild(response)
    }else if (gridSize>100){
        //A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing.
        response.textContent='Grid size must be less than 100'
        grid.appendChild(response)
    }else{
        let columns=gridSize
        let rows=gridSize
        drawGrid(rows,columns)
        hover(squares)
    }

})

drawGrid()
hover(squares)

pens.forEach((pen)=>{pen.addEventListener('click', (e)=>{
    color= pen.className.toLowerCase();
    })
})


function pickColor(color){
    const colors={
        'black':`rgb(0,0,0)`,
        'rainbow':`rgb(${getRandomRgbNum()},${getRandomRgbNum()},${getRandomRgbNum()})`,
        'erase': ''
    }
    if (color==='black'){
        return colors.black
    }else if (color==='rainbow'){
        return colors.rainbow
    }else if (color==='erase'){
        return colors.erase
    }
}

function hover(squares){
    squares.forEach((square)=>{
    square.addEventListener('mouseover',(e)=>{
        console.log(color)
        if (color==='black'||color==='rainbow'||color==='erase'){
            square.style.backgroundColor= pickColor(color)
            square.style.opacity=''
        }else if (color==='shadedark'){
            if (square.style.opacity===''){
                square.style.backgroundColor='rgb(0,0,0)'
                square.style.opacity=0.1
            }else{
                square.style.opacity= +square.style.opacity+0.1
            }
        }else if (color==='shadelight'){
            if (square.style.opacity===''){
                square.style.backgroundColor='rgb(0,0,0)'
                square.style.opacity=0.1
            }else{
                square.style.opacity= +square.style.opacity-0.1
            }           
        } 
        })
    })
}
