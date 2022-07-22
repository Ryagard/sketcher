let resolution = 16;
const grid = document.querySelector('.grid-container');
const options = document.querySelector('.options');
const resValue = document.querySelector('.resValue');

function drawGrid(res){
    grid.style.gridTemplateColumns = `repeat(${res}, 1fr)`;
    grid.style.gridTemplateRow = `repeat(${res}, 1fr)`;

    for (let i = 0; i < (res * res); i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.addEventListener("mouseover", drawCell);
        grid.appendChild(cell);
    }
    resValue.innerText = `${res} x ${res}`;
}
drawGrid(resolution);


function changeRes(res){

    while(grid.lastElementChild)
    {
        grid.removeChild(grid.lastElementChild);
    }
    
    let resolution = res;

    drawGrid(res);
}

function drawCell(e){
    e.target.style.backgroundColor = "black";
}