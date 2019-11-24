import styled, { css } from 'styled-components';
import theme from '../../../Theme/mainTheme';

const Heading = styled.h2`
  font-size: ${theme.font.m};
  font-weight: 300;
  text-align: center;
  padding-top: 0.6em;

  ${({ topLine }) =>
    topLine &&
    css`
      &::before {
        content: '';
        display: block;
        margin: 0 auto 0.5em;
        border-top: 1px #262525 solid;
        width: 90vw;
        height: 2px;
      }
    `}

  @media (min-width: ${theme.small}) {
    font-size: ${theme.font.l};
  }
  @media (min-width: ${theme.large}) {
    font-size: ${theme.font.xl};
    text-align: left;
    margin: 0 0 0.3em 0.7em;
  }
`;

export default Heading;
