import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Tween } from 'react-gsap';
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

const ListWithoutAnimation = ({ items }) => (
  <StyledUl>
    {items.map(item => (
      <ListItem key={item.value}>{item.value}</ListItem>
    ))}
  </StyledUl>
);

const ListWithAnimation = ({ items, animation }) => (
  <Tween
    wrapper={<StyledUl />}
    duration={0.7}
    staggerFrom={{
      opacity: 0,
      x: -200,
    }}
    staggerTo={{
      opacity: 1,
      x: 0,
    }}
    paused
    stagger={0.1}
    playState={
      animation.type === 'enter' && animation.scrollDirection === 'FORWARD'
        ? 'play'
        : animation.type === 'enter' && animation.scrollDirection === 'REVERSE'
        ? 'reverse'
        : null
    }
  >
    {items.map(item => (
      <ListItem key={item.value}>{item.value}</ListItem>
    ))}
  </Tween>
);

const List = ({ items, animation }) => {
  const render = animation ? (
    <ListWithAnimation items={items} animation={animation} />
  ) : (
    <ListWithoutAnimation items={items} />
  );
  return render;
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};
export default List;
