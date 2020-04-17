import React from 'react';
import Content from 'components/styles/content';
import Title from 'components/styles/title';
import Card from 'components/styles/card';
import Grid from 'components/grid';
import createFullGrid from 'utils/full-grid';
import { BLOCK_COORDS, GRID, INDEX } from 'types';

const grid = createFullGrid();

interface IGridContext {
  grid?: GRID;
  selectedBlock?: null | BLOCK_COORDS;
  handleSelectBlock: (row: INDEX, col: INDEX) => void;
}

export const GridContext = React.createContext<IGridContext>({
  handleSelectBlock: () => {},
});

function App() {
  const [selectedBlock, setSelectedBlock] = React.useState<null | BLOCK_COORDS>(null);
  const handleSelectBlock = (rowIndex: INDEX, colIndex: INDEX) => {
    setSelectedBlock([rowIndex, colIndex]);
  };
  return (
    <GridContext.Provider value={{ grid, selectedBlock, handleSelectBlock }}>
      <Content>
        <Title>Sudoku</Title>
        <Card>
          <Grid />
        </Card>
      </Content>
    </GridContext.Provider>
  );
}

export default App;
