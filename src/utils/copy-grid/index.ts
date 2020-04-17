import { GRID, INDEX } from 'types';
import { emptyGrid } from 'utils/full-grid';

const copyGrid = (grid: GRID): GRID => {
  const gridCopy: GRID = emptyGrid;

  for (let r: INDEX = 0; r < 9; r++) {
    for (let c: INDEX = 0; c < 9; c++) {
      gridCopy[r][c] = grid[r][c];
    }
  }

  return gridCopy;
};

export default copyGrid;
