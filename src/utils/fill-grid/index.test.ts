import { GRID } from 'types';
import fillGrid from './index';

describe('fillGrid', () => {
  it('fills an empty grid', () => {
    const grid: GRID = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    fillGrid(grid);
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        expect(grid[row][col]).toBeGreaterThan(0);
        expect(grid[row][col]).toBeLessThan(10);
      }
    }
  });
  it('fills partially filled grid', () => {
    const grid: GRID = [
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 8, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    fillGrid(grid);
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        expect(grid[row][col]).toBeGreaterThan(0);
        expect(grid[row][col]).toBeLessThan(10);
      }
    }
  })
});
