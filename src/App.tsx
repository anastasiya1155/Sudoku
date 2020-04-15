import React from 'react';
import Content from 'components/styles/content';
import Title from 'components/styles/title';
import Card from 'components/styles/card';
import Grid from 'components/grid';

function App() {
  return (
    <Content>
      <Title>Sudoku</Title>
      <Card>
        <Grid />
      </Card>
    </Content>
  );
}

export default App;
