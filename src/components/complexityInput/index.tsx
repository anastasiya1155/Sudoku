import React from 'react';
import Input from '../styles/input';

interface IProps {
  value: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ComplexityInput = ({ value, handleChange }: IProps) => (
  <Input placeholder="Complexity (default 5)" value={value} onChange={handleChange} type="number" />
);

export default ComplexityInput;
