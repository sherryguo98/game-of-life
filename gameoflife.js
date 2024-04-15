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
  ],  // Fixed: Added a comma here
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
            gridData[y][col] = alphabetPatterns[char][y][x] === 1;
          }
        }
      }
    }
  }
}

// Function to update the grid display
function updateGridDisplay() {
  gridContainer.innerHTML = '';  // Clear previous cells
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const cell = document.createElement('div');
      cell.className = 'cell' + (gridData[y][x] ? ' alive' : '');
      gridContainer.appendChild(cell);
    }
  }
}

// Function to initialize the grid with user input text
function initializeGridWithString(text) {
  stringToPattern(text);
  updateGridDisplay();
}

// Initial setup
document.addEventListener('DOMContentLoaded', function() {
  initializeGridWithString('DAISY'); // Default text to display
});

// Add your Game of Life logic here (update function, start/stop controls, etc.)
