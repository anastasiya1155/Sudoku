import React from 'react';
import Container from './styles/container';
import Row from './styles/row';
import Block from './block';

const Grid: React.FC = () => (
  <Container>
    {React.Children.toArray(
      [...Array(9)].map((_, rowIndex) => (
        <Row>
          {React.Children.toArray(
            [...Array(9)].map((_, colIndex) => <Block colIndex={colIndex} rowIndex={rowIndex} />),
          )}
        </Row>
      )),
    )}
  </Container>
);

export default Grid;
