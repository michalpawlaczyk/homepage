import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'Theme/mainTheme';
import ListItem from './ListItem';

const StyledUl = styled.ul`
  list-style: none;
  max-width: 1000px;
  column-gap: calc(${theme.font.s} + 10px);

  @media (min-width: ${theme.small}) {
    margin-left: 3vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${theme.medium}) {
    margin-top: 6rem;
  }
`;

const List = ({ items }) => (
  <>
    {items.length ? (
      <StyledUl>
        {items.map(item => (
          <ListItem key={item.value}>{item.value}</ListItem>
        ))}
      </StyledUl>
    ) : (
      <h1>Something goes wrong!</h1>
    )}
  </>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
};
export default List;
