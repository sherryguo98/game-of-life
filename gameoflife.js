const grid = document.getElementById('gameGrid');
const rows = 20;
const cols = 40;
let intervalId;
let gridData = Array(rows).fill().map(() => Array(cols).fill(false));

function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${cols}, 10px)`;
    grid.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('click', () => toggleCell(i, j, cell));
            grid.appendChild(cell);
        }
    }
}

function toggleCell(i, j, cell) {
    gridData[i][j] = !gridData[i][j];
    cell.classList.toggle('alive');
}

function updateGrid() {
    const nextGen = gridData.map(arr => [...arr]);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let liveNeighbors = 0;
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    if (x === 0 && y === 0) continue;
                    let ni = i + x, nj = j + y;
                    if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
                        liveNeighbors += gridData[ni][nj] ? 1 : 0;
                    }
                }
            }
            if (gridData[i][j] && (liveNeighbors < 2 || liveNeighbors > 3)) {
                nextGen[i][j] = false;
            } else if (!gridData[i][j] && liveNeighbors === 3) {
                nextGen[i][j] = true;
            }
        }
    }
    gridData = nextGen;
    render();
}

function render() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, idx) => {
        const i = Math.floor(idx / cols);
        const j = idx % cols;
        cell.classList.toggle('alive', gridData[i][j]);
    });
}

function startGame() {
    if (!intervalId) {
        intervalId = setInterval(updateGrid, 100);
    }
}

function stopGame() {
    clearInterval(intervalId);
    intervalId = null;
}

function initializeFromText() {
    const text = document.getElementById('textInput').value.toUpperCase();
    gridData = gridData.map(() => Array(cols).fill(false)); // Reset grid
    const letters = text.split('');
    const patternLength = Math.ceil(cols / letters.length);

    letters.forEach((letter, index) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < patternLength; j++) {
                let pos = index * patternLength + j;
                if (pos < cols && (i % 2 === 0) && (letter.charCodeAt(0) % 2 === 1)) { // simple even-odd pattern based on ASCII
                    gridData[i][pos] = true;
                }
            }
        }
    });
    render();
}

createGrid();
