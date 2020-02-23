import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
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
  <Controller>
    <Scene
      duration={1}
      reverse={true}
      indicators={false}
      triggerElement=".skillsView"
      triggerHook={0.7}
    >
      {(progress, event) => (
        <Tween
          duration={0.6}
          from={{
            opacity: 0,
            y: 200,
          }}
          to={{
            opacity: 1,
            y: 0,
          }}
          paused
          playState={
            event.type === 'enter' && event.scrollDirection === 'FORWARD'
              ? 'play'
              : event.type === 'enter' && event.scrollDirection === 'REVERSE'
              ? 'reverse'
              : null
          }
        >
          <section className="skillsView">
            {mainTitle && <Heading topLine>{mainTitle}</Heading>}
            {listData.map((item, index) => (
              <StyledListWrapper key={index}>
                <Tween
                  duration={0.5}
                  delay={0.2}
                  from={{
                    opacity: 0,
                    x: 200,
                  }}
                  to={{
                    opacity: 1,
                    x: 0,
                  }}
                  paused
                  playState={
                    event.type === 'enter' && event.scrollDirection === 'FORWARD'
                      ? 'play'
                      : event.type === 'enter' && event.scrollDirection === 'REVERSE'
                      ? 'reverse'
                      : null
                  }
                >
                  <Heading small as="h3">
                    {item.list.listTitle}
                  </Heading>
                </Tween>
                <List items={item.list.listItems} animation={event} />
              </StyledListWrapper>
            ))}
          </section>
        </Tween>
      )}
    </Scene>
  </Controller>
);
export default SkillsView;
