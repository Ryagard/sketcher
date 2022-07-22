let resolution = 16;
const grid = document.querySelector('.grid-container');
const options = document.querySelector('.options');
const resValue = document.querySelector('.resValue');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function drawGrid(res){
    grid.style.gridTemplateColumns = `repeat(${res}, 1fr)`;
    grid.style.gridTemplateRow = `repeat(${res}, 1fr)`;

    for (let i = 0; i < (res * res); i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.addEventListener('click', drawCell);
        cell.addEventListener('mouseenter', drawCell);        
        grid.appendChild(cell);
    }
    resValue.innerText = `${res} x ${res}`;
}
drawGrid(resolution);


function rebuildGrid(res){

    while(grid.lastElementChild)
    {
        grid.removeChild(grid.lastElementChild);
    }
    
    let resolution = res;

    drawGrid(res);
}

function drawCell(e){
    if(e.type === 'click' || mouseDown === true){
        e.target.style.backgroundColor = 'black';
    }
}

function clearGrid(){
    let size = document.querySelector('.slider');
    rebuildGrid(size.value);
}