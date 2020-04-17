import { GRID, NUMBERS } from 'types';
import isInRow from 'utils/is-in/row';
import isInColumn from 'utils/is-in/col';
import identifySquare from 'utils/identify-square';
import isInSquare from 'utils/is-in/square';
import checkGrid from 'utils/check-grid';
import { globalCounter } from 'utils/remove-numbers';

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const solveGrid = (grid: GRID) => {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      for (let value of numbers) {
        if (!isInRow({ grid, rowIndex: row, value })) {
          if (!isInColumn({ grid, colIndex: col, value })) {
            const square = identifySquare({ grid, colIndex: col, rowIndex: row });
            if (!isInSquare({ square, value })) {
              grid[row][col] = value;
              if (checkGrid(grid)) {
                globalCounter.counter++;
                break;
              } else if (solveGrid(grid)) {
                return true;
              }
            }
          }
        }
      }
      break;
    }
  }

  grid[row][col] = 0;
};

export default solveGrid;
