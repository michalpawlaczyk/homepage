import styled from 'styled-components';
import theme from 'Theme/mainTheme';

const Paragraph = styled.p`
  font-weight: 200;
  font-size: ${theme.font.xs};
  margin: 0 1em 0.5em;
  @media (min-width: ${theme.small}) {
    font-size: ${theme.font.s};
  }
  @media (min-width: ${theme.small}) {
    margin: 0 2em 0.5em;
  }
`;

export default Paragraph;
