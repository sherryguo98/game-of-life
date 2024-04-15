// JavaScript: gameoflife.js

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
  ]  
  // Define patterns for the rest of the alphabet B through Y
  'Z': [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]
  ],
  // Space represents empty or non-alphabet character
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
const rows = 5;
const cols = 100;
let gridData = createGridData(rows, cols);

// Helper function to create an empty grid
function createGridData(rows, cols) {
  return Array.from({ length: rows }, () => Array(cols).fill(false));
}

// Resets the grid data to all dead cells
function resetGridData() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      gridData[row][col] = false;
    }
  }
}

// Function to convert a string to a pattern on the grid
function stringToPattern(str) {
  resetGridData();

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toUpperCase();
    if (alphabetPatterns[char]) {
      for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
          const col = i * 6 + x; // 6 columns per character, including space
          if (col < cols) {
            gridData[y][col] = alphabetPatterns[char][y][x];
          }
        }
      }
    }
  }
}

// Function to update the grid display
function updateGridDisplay() {
  const cells = gridContainer.querySelectorAll('.cell');
  cells.forEach((cell, idx) => {
    const row = Math.floor(idx / cols);
    const col = idx % cols;
    cell.classList.toggle('alive', !!gridData[row][col]);
  });
}

// Function to initialize the grid with user input text
function initializeGridWithString(text) {
  stringToPattern(text);
  updateGridDisplay();
}

// Event listeners for the grid cells (click to toggle life status)
function attachCellEventListeners() {
  gridContainer.innerHTML = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      cell.addEventListener('click', () => {
        gridData[i][j] = !gridData[i][j];
        cell.classList.toggle('alive');
      });
      gridContainer.appendChild(cell);
    }
  }
}

// Main function to create and display the initial grid
function main() {
  attachCellEventListeners();
  initializeGridWithString('DAISY'); // Default word to display on the grid
}

main(); // Initialize the grid on page load

// Add your Game of Life logic here (update function, start/stop controls, etc.)
