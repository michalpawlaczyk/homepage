import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading.js';
import List from 'components/atoms/List/List.js';
import theme from 'Theme/mainTheme';

const StyledListWrapper = styled.div`
  margin: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${theme.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SkillsView = ({ mainTitle, listData }) => (
  <section>
    ${mainTitle && <Heading topLine>{mainTitle}</Heading>};
    <StyledListWrapper>
      {listData.map(item => (
        <>
          <Heading small as="h3">
            {item.list.listTitle}
          </Heading>
          <List items={item.list.listItems} />
        </>
      ))}
    </StyledListWrapper>
  </section>
);
export default SkillsView;
