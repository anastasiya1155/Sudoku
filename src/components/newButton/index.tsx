import React from 'react';
import Button from 'components/styles/button';
import { GridContext } from 'App';

const NewButton: React.FC = () => {
  const { handleNewGame } = React.useContext(GridContext);

  const handleClick = () => {
    if (window.confirm('Are you sure you want to start a new game?')) {
      handleNewGame();
    }
  };

  return (
    <Button onClick={handleClick}>New Game</Button>
  );
};

export default NewButton;
