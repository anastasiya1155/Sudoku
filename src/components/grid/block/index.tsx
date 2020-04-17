import React from 'react';
import { GridContext } from 'App';
import { INDEX } from 'types';
import Container from './styles';

interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

const Block: React.FC<IProps> = ({ colIndex, rowIndex }) => {
  const { grid, selectedBlock, handleSelectBlock } = React.useContext(GridContext);
  const isSelected = selectedBlock
    ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
    : false;
  const handleClick = () => {
    if (!isSelected) {
      handleSelectBlock(rowIndex, colIndex);
    }
  };
  return (
    <Container active={isSelected} onClick={handleClick}>
      {grid ? grid[rowIndex][colIndex] : ''}
    </Container>
  );
};

export default Block;
