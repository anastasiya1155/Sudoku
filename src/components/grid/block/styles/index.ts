import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex: 1 0 0;
    font-weight: bold;
    font-size: 20px;
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`;
