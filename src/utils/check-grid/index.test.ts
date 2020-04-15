import { GRID } from 'types';
import checkGrid from './index';

describe('checkGrid', () => {
  it('returns true if grid is complete', () => {
    const grid: GRID = [
      [8, 4, 2, 6, 5, 1, 3, 9, 7],
      [5, 3, 7, 2, 8, 9, 6, 4, 1],
      [6, 9, 1, 7, 3, 4, 5, 2, 8],
      [1, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 5, 8, 1, 9, 2, 4, 6, 3],
      [9, 2, 4, 3, 7, 6, 1, 8, 5],
      [4, 7, 6, 5, 1, 8, 2, 3, 9],
      [2, 8, 5, 9, 6, 3, 7, 1, 4],
      [3, 1, 9, 3, 1, 7, 8, 5, 6],
    ];

    expect(checkGrid(grid)).toBeTruthy();
  });

  it('returns true if grid is NOT complete', () => {
    const grid: GRID = [
      [8, 4, 2, 6, 5, 0, 3, 9, 7],
      [5, 3, 7, 2, 8, 9, 6, 4, 0],
      [6, 9, 0, 7, 3, 4, 5, 2, 8],
      [1, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 5, 8, 0, 9, 2, 4, 6, 3],
      [9, 2, 4, 3, 7, 6, 0, 8, 5],
      [4, 7, 6, 5, 0, 8, 2, 3, 9],
      [2, 8, 5, 9, 6, 3, 7, 0, 4],
      [3, 0, 9, 3, 1, 7, 8, 5, 6],
    ];

    expect(checkGrid(grid)).toBeFalsy();
  });
});
