
const body = document.querySelector('body')
//define dimensions of grid
const columns = 16;
const rows = 16;

//create parent grid
const grid = document.createElement('div');
grid.className= "grid";

for (let i=0; i<columns; i++){
    //create 16 columns
    let column= document.createElement('div');
    column.className= 'column';
    for (let j=0; j<rows;j++){
        //create 16 rows of divs in each column
        let row=document.createElement('div');
        row.className= 'row';
        column.appendChild(row)
    }
    //append all columns to parent grid
    grid.appendChild(column);
}

body.appendChild(grid)
console.log("finished")