import compareArrays from './index';

describe('compareArrays', () => {
  it('returns false if arrays have different length', () => {
    expect(compareArrays([1, 2], [1, 2, 3])).toBeFalsy();
  });
  it('returns false if arrays have different values', () => {
    expect(compareArrays([1, 2, 4], [1, 2, 3])).toBeFalsy();
  });
  it('returns true if arrays have the same values', () => {
    expect(compareArrays([1, 2, 3], [1, 2, 3])).toBeTruthy();
  });
  it('returns true if nested arrays have the same values', () => {
    expect(compareArrays([1, 2, [3, 2, 1]], [1, 2, [3, 2, 1]])).toBeTruthy();
  });
  it('returns false if nested arrays have different values', () => {
    expect(compareArrays([1, 2, [3, 1, 2]], [1, 2, [3, 2, 1]])).toBeFalsy();
  });
});
