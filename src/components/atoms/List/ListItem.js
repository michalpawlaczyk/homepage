import styled from 'styled-components';
import theme from 'Theme/mainTheme';
import checkIcon from 'static/list_check.svg';

const ListItem = styled.li`
  font-weight: 200;
  font-size: ${theme.font.s};
  margin: 0 0 0.8em 0;
  position: relative;
  padding-left: 32px;

  &::before {
    content: '';
    height: 18px;
    width: 22px;
    position: absolute;
    display: block;
    top: calc(50% - (${theme.font.s} / 2));
    left: 0;
    background: url(${checkIcon});
    background-size: cover;
  }

  @media (min-width: ${theme.small}) {
    font-size: ${theme.font.m};
    margin: 0 0 0.8em 0.8em;
  }
  @media (min-width: ${theme.large}) {
    margin: 0 0 0.8em 2.3em;
  }
`;

export default ListItem;
