import { GRID } from 'types';
import getRandomIndex from 'utils/get-random-index';
import copyGrid from 'utils/copy-grid';
import solveGrid from 'utils/solve-grid';

export const globalCounter = {
  counter: 0,
};

const removeNumbers = (grid: GRID, attempts = 5): GRID => {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    globalCounter.counter = 0;
    const gridCopy = copyGrid(grid);

    solveGrid(gridCopy);

    // If it is not solved return removed number
    // reduce no. of attempts
    if (globalCounter.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }

  return grid;
};

export default removeNumbers;
