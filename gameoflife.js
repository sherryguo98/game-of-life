// JavaScript: gameoflife.js

// Define patterns for each letter
const alphabetPatterns = {
  A': [
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
  // ... (Define the rest of the letters I to Y)
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
  // Attach event listeners to the grid cells
  attachCellEventListeners();

  // Initialize an empty grid
  updateGridDisplay();
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

// Add your Game of Life logic here (update function, start/stop controls, etc.)
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
