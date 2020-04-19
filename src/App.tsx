import React from 'react';
import Content from 'components/styles/content';
import Title from 'components/styles/title';
import Card from 'components/styles/card';
import Grid from 'components/grid';
import createFullGrid from 'utils/full-grid';
import { BLOCK_COORDS, GRID, INDEX, NUMBERS } from 'types';
import removeNumbers from 'utils/remove-numbers';
import copyGrid from 'utils/copy-grid';
import compareArrays from 'utils/compare-arrays';
import isInRow from 'utils/is-in/row';
import isInColumn from 'utils/is-in/col';
import isInSquare from 'utils/is-in/square';
import identifySquare from 'utils/identify-square';
import Numbers from 'components/numbers';
import NewButton from 'components/newButton';
import { getState, saveState, saveWorkingState } from 'utils/storage-helpers';

interface IGridContext {
  challengeGrid?: GRID;
  solvedGrid?: GRID;
  workingGrid?: GRID;
  selectedBlock?: null | BLOCK_COORDS;
  handleSelectBlock: (row: INDEX, col: INDEX) => void;
  handleFillValue: (value: NUMBERS) => void;
  handleRemoveValue: () => void;
  handleNewGame: (complexity: number) => void;
}

export const GridContext = React.createContext<IGridContext>({
  handleSelectBlock: () => {},
  handleFillValue: () => {},
  handleRemoveValue: () => {},
  handleNewGame: () => {},
});

const emptyGrid: GRID = [
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

function App() {
  const [selectedBlock, setSelectedBlock] = React.useState<null | BLOCK_COORDS>(null);
  const [challengeGrid, setChallengeGrid] = React.useState<GRID>(emptyGrid);
  const [solvedGrid, setSolvedGrid] = React.useState<GRID>(emptyGrid);
  const [workingGrid, setWorkingGrid] = React.useState<GRID>(emptyGrid);

  const handleNewGame = (complexity: number) => {
    const solved = createFullGrid();
    const gridCopy = copyGrid(solved);
    const challenge = removeNumbers(gridCopy, complexity);
    const working = copyGrid(challenge);
    setChallengeGrid(challenge);
    setSolvedGrid(solved);
    setWorkingGrid(working);
    saveState({ solvedGrid: solved, challengeGrid: challenge, workingGrid: working });
  };

  React.useEffect(() => {
    const state = getState();
    if (state) {
      setSolvedGrid(state.solvedGrid);
      setChallengeGrid(state.challengeGrid);
      setWorkingGrid(state.workingGrid);
    } else {
      handleNewGame(5);
    }
  }, []);

  const handleSelectBlock = (rowIndex: INDEX, colIndex: INDEX) => {
    setSelectedBlock([rowIndex, colIndex]);
  };
  const handleFillValue = (value: NUMBERS) => {
    if (selectedBlock) {
      const row = selectedBlock[0];
      const col = selectedBlock[1];
      if (!isInRow({ grid: workingGrid, rowIndex: row, value })) {
        if (!isInColumn({ grid: workingGrid, colIndex: col, value })) {
          const square = identifySquare({ grid: workingGrid, colIndex: col, rowIndex: row });
          if (!isInSquare({ square, value })) {
            const newGrid = copyGrid(workingGrid);
            newGrid[row][col] = value;
            setWorkingGrid(newGrid);
            saveWorkingState(newGrid);
            if (compareArrays(newGrid, solvedGrid)) {
              alert('Completed!');
            }
          } else {
            alert('This value is already in this SQUARE!');
          }
        } else {
          alert('This value is already in this COLUMN!');
        }
      } else {
        alert('This value is already in this ROW!');
      }
    }
  };

  const handleRemoveValue = () => {
    if (selectedBlock) {
      const row = selectedBlock[0];
      const col = selectedBlock[1];
      if (!challengeGrid[row][col]) {
        const newGrid = copyGrid(workingGrid);
        newGrid[row][col] = 0;
        setWorkingGrid(newGrid);
      }
    }
  };

  return (
    <GridContext.Provider
      value={{
        challengeGrid,
        solvedGrid,
        workingGrid,
        selectedBlock,
        handleSelectBlock,
        handleFillValue,
        handleRemoveValue,
        handleNewGame,
      }}
    >
      <Content>
        <Title>Sudoku</Title>
        <Card>
          <NewButton />
          <Grid />
          <Numbers />
        </Card>
      </Content>
    </GridContext.Provider>
  );
}

export default App;
