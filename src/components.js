import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  ${props => props.theme === 'dark' && css`
    background : #000;
    color: #fff;
  `}
`;