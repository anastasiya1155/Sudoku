import React from 'react';
import Button from 'components/styles/button';
import { NUMBERS } from 'types';
import { GridContext } from 'App';
import Container from './styles';

const Numbers: React.FC = () => {
  const { handleFillValue, handleRemoveValue } = React.useContext(GridContext);
  return (
    <Container>
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((n) => (
        <Button key={n} onClick={() => handleFillValue(n)}>
          {n}
        </Button>
      ))}
      <Button onClick={handleRemoveValue}>-</Button>
    </Container>
  );
};

export default Numbers;
