import React from 'react';
import Button from 'components/styles/button';
import { GridContext } from 'App';
import ComplexityInput from 'components/complexityInput';

const NewButton: React.FC = () => {
  const [complexity, setComplexity] = React.useState('');
  const { handleNewGame } = React.useContext(GridContext);

  const handleClick = () => {
    if (window.confirm('Are you sure you want to start a new game?')) {
      handleNewGame(parseInt(complexity, 10));
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <ComplexityInput value={complexity} handleChange={(e) => setComplexity(e.target.value)} />
      <Button onClick={handleClick}>New Game</Button>
    </div>
  );
};

export default NewButton;
