import { GRID, NUMBERS } from 'types';

interface IInput {
  grid: GRID;
  rowIndex: number;
  value: NUMBERS;
}

const isInRow = ({ grid, rowIndex, value }: IInput): boolean => grid[rowIndex].includes(value);

export default isInRow;
