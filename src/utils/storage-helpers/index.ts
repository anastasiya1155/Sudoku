import { GRID } from 'types';

interface IState {
  solvedGrid: GRID;
  challengeGrid: GRID;
  workingGrid: GRID;
}

const SOLVED_GRID = 'solvedGrid';
const CHALLENGE_GRID = 'challengeGrid';
const WORKING_GRID = 'workingGrid';

export const saveState = ({ solvedGrid, challengeGrid, workingGrid }: IState) => {
  localStorage.setItem(SOLVED_GRID, JSON.stringify(solvedGrid));
  localStorage.setItem(CHALLENGE_GRID, JSON.stringify(challengeGrid));
  localStorage.setItem(WORKING_GRID, JSON.stringify(workingGrid));
};

export const saveWorkingState = (grid: GRID): void => {
  localStorage.setItem(WORKING_GRID, JSON.stringify(grid));
};

export const getState = (): null | IState => {
  const solvedGrid = localStorage.getItem(SOLVED_GRID);
  const challengeGrid = localStorage.getItem(CHALLENGE_GRID);
  const workingGrid = localStorage.getItem(WORKING_GRID);
  if (solvedGrid && challengeGrid && workingGrid) {
    return {
      solvedGrid: JSON.parse(solvedGrid),
      challengeGrid: JSON.parse(challengeGrid),
      workingGrid: JSON.parse(workingGrid),
    };
  }
  return null;
};
