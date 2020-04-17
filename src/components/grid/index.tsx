import React from 'react';
import useMousetrap from 'react-hook-mousetrap';
import { INDEX } from 'types';
import { GridContext } from 'App';
import Container from './styles/container';
import Row from './styles/row';
import Block from './block';

const Grid: React.FC = () => {
  const { selectedBlock, handleSelectBlock } = React.useContext(GridContext);
  const moveDown = () => {
    if (selectedBlock) {
      const rowIndex = selectedBlock[0] + 1;
      if (rowIndex <= 8 && rowIndex !== selectedBlock[0]) {
        handleSelectBlock(rowIndex as INDEX, selectedBlock[1]);
      }
    }
  };
  const moveLeft = () => {
    if (selectedBlock) {
      const colIndex = selectedBlock[1] - 1;
      if (colIndex >= 0 && colIndex !== selectedBlock[1]) {
        handleSelectBlock(selectedBlock[0], colIndex as INDEX);
      }
    }
  };
  const moveUp = () => {
    if (selectedBlock) {
      const rowIndex = selectedBlock[0] - 1;
      if (rowIndex >= 0 && rowIndex !== selectedBlock[0]) {
        handleSelectBlock(rowIndex as INDEX, selectedBlock[1]);
      }
    }
  };
  const moveRight = () => {
    if (selectedBlock) {
      const colIndex = selectedBlock[1] + 1;
      if (colIndex <= 8 && colIndex !== selectedBlock[1]) {
        handleSelectBlock(selectedBlock[0], colIndex as INDEX);
      }
    }
  };

  useMousetrap('down', moveDown);
  useMousetrap('left', moveLeft);
  useMousetrap('right', moveRight);
  useMousetrap('up', moveUp);
  return (
    <Container>
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row>
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex as INDEX} rowIndex={rowIndex as INDEX} />
              )),
            )}
          </Row>
        )),
      )}
    </Container>
  );
};

export default Grid;
