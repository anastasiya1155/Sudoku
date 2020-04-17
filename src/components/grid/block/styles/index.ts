import styled, { css } from 'styled-components';

interface IProps {
  active?: boolean;
  bold?: boolean;
}

export default styled.div<IProps>`
  ${({ theme, active, bold }) => css`
    align-items: center;
    background: ${active ? theme.colors.blue : theme.colors.white};
    border: 1px solid ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex: 1 0 0;
    font-weight: ${bold ? 'bolder' : 'lighter'};
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
