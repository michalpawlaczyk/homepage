import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import GitHubProjectCard from 'components/molecules/GitHubProjectCard/GitHubProjectCard';
import Heading from 'components/atoms/Heading/Heading';
import theme from 'Theme/mainTheme';

ScrollMagicPluginGsap(ScrollMagic, gsap);

const StyledProjectsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 4vh;
  grid-gap: 30px;
  justify-items: center;
  @media (min-width: ${theme.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${theme.large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectsView = ({ data }) => {
  const sectionWrapper = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.set([sectionWrapper.current, cardRef.current], { autoAlpha: 0 });
    const sectionWrapperAnimation = gsap
      .fromTo(sectionWrapper.current, { y: '+=200' }, { duration: 0.6, y: '-=200', autoAlpha: 1 })
      .pause();

    const cardAnimation = gsap
      .fromTo(cardRef.current, { scale: 0.7 }, { duration: 0.6, autoAlpha: 1, scale: 1 })
      .pause();

    new ScrollMagic.Scene({
      triggerElement: sectionWrapper.current,
      triggerHook: 0.7,
    })
      .on('enter', function() {
        sectionWrapperAnimation.play();
      })
      .on('leave', function() {
        sectionWrapperAnimation.reverse();
      })
      .on('enter', function() {
        cardAnimation.play();
      })
      .on('leave', function() {
        cardAnimation.reverse();
      })
      .addTo(new ScrollMagic.Controller());
  });

  return (
    <section ref={sectionWrapper}>
      <Heading as="h2" topLine>
        Projects
      </Heading>
      <StyledProjectsWrapper ref={cardRef}>
        {data ? (
          data.github.repositoryOwner.repositories.nodes.map(element => (
            <GitHubProjectCard
              key={element.name}
              name={element.name}
              description={element.description}
              sourceUrl={element.url}
            />
          ))
        ) : (
          <p>
            Something goes wrong
            <span role="img" aria-label="scary">
              😨
            </span>
          </p>
        )}
      </StyledProjectsWrapper>
    </section>
  );
};

export default ProjectsView;
