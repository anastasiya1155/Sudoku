import { NUMBERS, SQUARE } from 'types';

interface IInput {
  square: SQUARE;
  value: NUMBERS;
}

const isInSquare = ({ square, value }: IInput): boolean =>
  [...square[0], ...square[1], ...square[2]].includes(value);

export default isInSquare;
