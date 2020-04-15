import styled, { css } from 'styled-components';

export default styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-top: 0;
    text-align: center;
  `}
`;
