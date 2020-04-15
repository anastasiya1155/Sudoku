import { GRID, NUMBERS } from 'types';

interface IInput {
  grid: GRID;
  colIndex: number;
  value: NUMBERS;
}

const isInColumn = ({ grid, colIndex, value }: IInput): boolean => {
  let isInCol = false;
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][colIndex]) {
      isInCol = true;
    }
  }
  return isInCol;
};

export default isInColumn;
