import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
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

const SkillsView = ({ mainTitle, listData }) => {
  const sectionRef = useRef(null);
  const listHeadingRef = useRef(null);

  useEffect(() => {
    gsap.set([sectionRef.current, listHeadingRef.current], { autoAlpha: 0 });
    const sectionAnimation = gsap
      .fromTo(sectionRef.current, { y: '+=200' }, { duration: 0.5, y: '-=200', autoAlpha: 1 })
      .pause();

    const listHeadingAnimation = gsap
      .fromTo(
        listHeadingRef.current,
        { x: '+=200' },
        { duration: 0.5, delay: 0.4, autoAlpha: 1, x: '-=200' },
      )
      .pause();

    const observer = new IntersectionObserver(
      entry => {
        if (entry[0].intersectionRatio >= 0.3) {
          sectionAnimation.play();
          listHeadingAnimation.play();
        }
      },
      {
        threshold: 0.3,
      },
    );
    observer.observe(sectionRef.current);
  });

  return (
    <section ref={sectionRef}>
      {mainTitle && <Heading topLine>{mainTitle}</Heading>}
      {listData.map((item, index) => (
        <StyledListWrapper key={index}>
          <Heading small as="h3" ref={listHeadingRef}>
            {item.list.listTitle}
          </Heading>
          <List items={item.list.listItems} animation={event} />
        </StyledListWrapper>
      ))}
    </section>
  );
};
export default SkillsView;
