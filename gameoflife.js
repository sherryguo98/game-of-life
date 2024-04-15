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
        if (gridData[i][j]) {
            cell.classList.add('alive');
        } else {
            cell.classList.remove('alive');
        }
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
    const text = document.getElementById('textInput').value;
    const letters = text.toUpperCase().split('');
    const patternLength = Math.ceil(cols / letters.length);
    gridData = gridData.map(() => Array(cols).fill(false));

    letters.forEach((letter, index) => {
        // Simple example: Convert 'A' to 1s, everything else to 0s
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < patternLength; j++) {
                if (letter === 'A' && i % 2 === 0) { // A simple pattern for 'A'
                    let pos = index * patternLength + j;
                    if (pos < cols) gridData[i][pos] = true;
                }
            }
        }
    });
    render();
}

createGrid();
