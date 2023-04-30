const body = document.querySelector('body')


const columns = 16;
const rows = 16;

const grid = document.createElement('div');
grid.className= "grid";

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
console.log("finished")