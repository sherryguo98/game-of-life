// JavaScript: gameoflife.js

const gridContainer = document.getElementById('gameGrid');
const rows = 5; // Based on the height of your letter patterns
const cols = 100; // Assuming a max width for now, adjust as needed
let intervalId = null;
let gridData = createGridData(rows, cols);

// Helper function to create grid data array
function createGridData(rows, cols) {
  return Array.from({ length: rows }, () => Array(cols).fill(false));
}

// Define patterns for each letter
const alphabetPatterns = {
  'A': [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1]
  ],
  // ... Define patterns for B through Y
  'Z': [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]
  ]
};

// Initialize the grid with a string
function initializeGridWithString(text) {
  resetGrid();
  const pattern = stringToPattern(text);
  applyPatternToGrid(pattern);
  updateGridDisplay();
}

// Reset the grid data to all false (dead)
function resetGrid() {
  gridData.forEach(row => row.fill(false));
}

// Convert a string to a grid pattern
function stringToPattern(str) {
  return str.toUpperCase().split('').flatMap((char, index) => {
    return alphabetPatterns[char] || [];
  });
}

// Apply a pattern to the grid data
function applyPatternToGrid(pattern) {
  pattern.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (y < rows && x < cols) {
        gridData[y][x] = cell === 1;
      }
    });
  });
}

// Create the visual grid in the DOM
function createGrid() {
  gridContainer.innerHTML = '';
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 10px)`;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      cell.onclick = () => toggleCell(i, j, cell);
      gridContainer.appendChild(cell);
    }
  }
}

// Toggle cell state
function toggleCell(row, col, cell) {
  gridData[row][col] = !gridData[row][col];
  cell.classList.toggle('alive');
}

// Update the grid display based on grid data
function updateGridDisplay() {
  gridContainer.childNodes.forEach((cell, index) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    cell.classList.toggle('alive', gridData[row][col]);
  });
}

// ... Add your Game of Life logic here

createGrid();
const grid = document.getElementById('gameGrid');
const rows = 40;
const cols = 80;
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
