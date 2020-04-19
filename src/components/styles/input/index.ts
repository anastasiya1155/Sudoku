import styled, { css } from 'styled-components';

const Input = styled.input`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.black};
    border-radius: 4px;
    color: ${theme.colors.black};
    cursor: pointer;
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    margin: 4px 2px;
    padding: 9px 15px;
    transition: ${theme.transition};

    &:focus {
      border-color: ${theme.colors.blue};
      outline: none;
    }
  `}
`;

export default Input;
