// Define patterns for each letter
const alphabetPatterns = {
  'A': [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1]
  ],
  'B': [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0]
  ],
  'C': [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  'D': [
    [1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 0, 0]
  ],
  'E': [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1]
  ],
  'F': [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0]
  ],
  'G': [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ], 
  'H': [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1]
  ],
  'I': [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0]
  ],
  'J': [
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 0, 0]
  ],
  'K': [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1]
  ],
  'L': [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1]
  ],
  'M': [
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1]
  ],
  'N': [
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1]
  ],
  'O': [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  'P': [
    [1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0]
  ],
  'Q': [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 1, 1, 1, 1]
  ],
  'R': [
    [1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0]
  ],
  'S': [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 0, 0]
  ],
  'T': [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0]
  ],
  'U': [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  'V': [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0]
  ],
  'W': [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1]
  ],
  'X': [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1]
  ],
  'Y': [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0]
  ],
  'Z': [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]
  ],
  ' ': [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]
};

// Grid dimensions
const gridContainer = document.getElementById('gameGrid');
const rows = 50;
const cols = 100; // This should be at least 6 times the number of characters you want to display
let gridData = createGridData(rows, cols);

// Create the initial grid data array
function createGridData(rows, cols) {
  return Array.from({ length: rows }, () => Array(cols).fill(false));
}

// Convert a string to a pattern on the grid
function stringToPattern(str) {
  // Clear the existing grid data
  gridData = createGridData(rows, cols);

  // Translate each character to the grid
  str.toUpperCase().split('').forEach((char, charIndex) => {
    const pattern = alphabetPatterns[char] || alphabetPatterns[' '];
    pattern.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const col = charIndex * 6 + cellIndex; // Assuming 6 columns per character including space
        if (rowIndex < rows && col < cols) {
          gridData[rowIndex][col] = cell;
        }
      });
    });
  });
}

// Update the grid display based on grid data
function updateGridDisplay() {
  // Clear the grid container
  gridContainer.innerHTML = '';

  // Create and append cells to the grid container
  gridData.forEach(row => {
    row.forEach(cellState => {
      const cell = document.createElement('div');
      cell.className = 'cell' + (cellState ? ' alive' : '');
      gridContainer.appendChild(cell);
    });
  });
}

// Attach event listeners and perform initial grid update
document.addEventListener('DOMContentLoaded', () => {
  // Get references to buttons and attach event listeners
  document.getElementById('startButton').addEventListener('click', startGame);
  document.getElementById('stopButton').addEventListener('click', stopGame);

  attachCellEventListeners();
  initializeGridWithString(); // Start with an empty grid
});

// Attach event listeners to grid cells (click to toggle life status)
function attachCellEventListeners() {
  // Use event delegation to handle cell clicks for current and future cells
  gridContainer.addEventListener('click', event => {
    if (event.target.classList.contains('cell')) {
      const index = Array.from(gridContainer.children).indexOf(event.target);
      const row = Math.floor(index / cols);
      const col = index % cols;
      gridData[row][col] = !gridData[row][col];
      event.target.classList.toggle('alive');
    }
  });
}

// Function to initialize the grid with user input text
function initializeGridWithString() {
  const text = document.getElementById('textInput').value;
  stringToPattern(text);
  updateGridDisplay();
}

// Add your Game of Life logic here
function calculateNextGeneration() {
  const newGridData = createGridData(rows, cols);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const alive = gridData[y][x];
      const neighbors = countAliveNeighbors(y, x);
      if (alive && (neighbors === 2 || neighbors === 3)) {
        newGridData[y][x] = true;
      } else if (!alive && neighbors === 3) {
        newGridData[y][x] = true;
      }
    }
  }

  gridData = newGridData;
  updateGridDisplay();
}

function countAliveNeighbors(y, x) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue; // Skip the current cell
      const newY = y + i;
      const newX = x + j;
      if (newY >= 0 && newY < rows && newX >= 0 && newX < cols) {
        count += gridData[newY][newX] ? 1 : 0;
      }
    }
  }
  return count;
}

// Start and stop controls
let simulationInterval = null;

function startGame() {
  if (!simulationInterval) {
    simulationInterval = setInterval(calculateNextGeneration, 100); // Adjust time as needed
  }
}

function stopGame() {
  if (simulationInterval) {
    clearInterval(simulationInterval);
    simulationInterval = null;
  }
}

// Attach event listeners and perform initial grid update
document.addEventListener('DOMContentLoaded', () => {
  attachCellEventListeners();
  initializeGridWithString(); // Start with an empty grid
});
