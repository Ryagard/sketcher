for (let i = 0; i < 256; i++) {
    const grid = document.querySelector('.grid');
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
}