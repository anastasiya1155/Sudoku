import shuffle from './index';

describe('shuffle', () => {
  it('returns an array of the same length', () => {
    const array = [1, 2, 3];
    shuffle(array);
    expect(array).toHaveLength(3);
  });

  it('returns and array with the same elements', () => {
    const array = [1, 2, 3];
    shuffle(array);
    expect(array).toContain(1);
    expect(array).toContain(2);
    expect(array).toContain(3);
  });
});
