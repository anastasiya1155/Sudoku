import { SQUARE } from 'types';
import isInSquare from './index';

describe('isInSquare', () => {
  it('returns true when value is in grid square', () => {
    const square: SQUARE = [
      [8, 4, 2],
      [5, 3, 7],
      [6, 9, 1],
    ];

    expect(isInSquare({ square, value: 9 })).toBeTruthy();
    expect(isInSquare({ square, value: 6 })).toBeTruthy();
    expect(isInSquare({ square, value: 1 })).toBeTruthy();
  });

  it('returns false when value is not in grid square', () => {
    const square: SQUARE = [
      [0, 4, 2],
      [5, 0, 7],
      [6, 9, 0],
    ];

    expect(isInSquare({ square, value: 8 })).toBeFalsy();
    expect(isInSquare({ square, value: 3 })).toBeFalsy();
    expect(isInSquare({ square, value: 1 })).toBeFalsy();
  });
});
