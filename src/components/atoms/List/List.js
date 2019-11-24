import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'Theme/mainTheme';
import ListItem from './ListItem';

const StyledUl = styled.ul`
  @media (min-width: ${theme.small}) {
    margin-left: 3vw;
    column-count: 2;
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
  items: PropTypes.object.isRequired,
};
export default List;
