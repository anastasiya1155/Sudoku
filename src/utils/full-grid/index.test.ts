import createFullGrid from './index';

describe('createFullGrid', () => {
  it('returns a valid 9x9 sudoku grid', () => {
    const grid = createFullGrid();
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        expect(grid[row][col]).toBeGreaterThan(0);
        expect(grid[row][col]).toBeLessThan(10);
      }
    }
  });
});
