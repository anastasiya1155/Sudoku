import { GRID, NUMBERS } from 'types';
import shuffle from 'utils/shuffle';
import isInRow from 'utils/is-in/row';
import isInColumn from 'utils/is-in/col';
import identifySquare from 'utils/identify-square';
import isInSquare from 'utils/is-in/square';
import checkGrid from 'utils/check-grid';

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const fillGrid = (grid: GRID) => {
  let row = 0;
  let col = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      shuffle(numbers);

      for (let value of numbers) {
        if (!isInRow({ grid, rowIndex: row, value })) {
          if (!isInColumn({ grid, colIndex: col, value })) {
            const square = identifySquare({ grid, rowIndex: row, colIndex: col });
            if (!isInSquare({ square, value })) {
              grid[row][col] = value;
              if (checkGrid(grid)) return true;
              else if (fillGrid(grid)) return true;
            }
          }
        }
      }

      break;
    }
  }
  // eslint-disable-next-line no-param-reassign
  grid[row][col] = 0;
  return false;
};

export default fillGrid;
