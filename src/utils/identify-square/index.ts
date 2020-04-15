import { GRID, SQUARE } from 'types';

interface IInput {
  grid: GRID;
  rowIndex: number;
  colIndex: number;
}

const identifySquare = ({ grid, rowIndex, colIndex }: IInput) => {
  const square = [];
  if (rowIndex < 3) {
    if (colIndex < 3) {
      for (let x = 0; x < 3; x++) {
        square.push([grid[x][0], grid[x][1], grid[x][2]]);
      }
    } else if (colIndex < 6) {
      for (let x = 0; x < 3; x++) {
        square.push([grid[x][3], grid[x][4], grid[x][5]]);
      }
    } else {
      for (let x = 0; x < 3; x++) {
        square.push([grid[x][6], grid[x][7], grid[x][8]]);
      }
    }
  } else if (rowIndex < 6) {
    if (colIndex < 3) {
      for (let x = 3; x < 6; x++) {
        square.push([grid[x][0], grid[x][1], grid[x][2]]);
      }
    } else if (colIndex < 6) {
      for (let x = 3; x < 6; x++) {
        square.push([grid[x][3], grid[x][4], grid[x][5]]);
      }
    } else {
      for (let x = 3; x < 6; x++) {
        square.push([grid[x][6], grid[x][7], grid[x][8]]);
      }
    }
  } else {
    if (colIndex < 3) {
      for (let x = 6; x < 9; x++) {
        square.push([grid[x][0], grid[x][1], grid[x][2]]);
      }
    } else if (colIndex < 6) {
      for (let x = 6; x < 9; x++) {
        square.push([grid[x][3], grid[x][4], grid[x][5]]);
      }
    } else {
      for (let x = 6; x < 9; x++) {
        square.push([grid[x][6], grid[x][7], grid[x][8]]);
      }
    }
  }
  return square as SQUARE;
};

export default identifySquare;
