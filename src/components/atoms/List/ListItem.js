import styled from 'styled-components';
import theme from 'Theme/mainTheme';

const ListItem = styled.li`
  font-weight: 200;
  font-size: 1.375rem;
  margin: 0 0 0.2em 0;
  @media (min-width: ${theme.small}) {
    font-size: 1.6rem;
    margin: 0 0 0.2em 0.8em;
  }
  @media (min-width: ${theme.large}) {
    margin: 0 0 0.2em 2.3em;
  }
`;

export default ListItem;
