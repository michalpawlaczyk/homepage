import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import GitHubProjectCard from 'components/molecules/GitHubProjectCard/GitHubProjectCard';
import Heading from 'components/atoms/Heading/Heading';
import Slider from 'components/molecules/Slider/Slider';

const StyledWrapper = styled.section`
  overflow: hidden;
  max-width: 100vw;
`;

const ProjectsView = ({ data }) => {
  const sectionWrapper = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.set([sectionWrapper.current, ...cardRef.current.children], { autoAlpha: 0 });
    const sectionWrapperAnimation = gsap
      .fromTo(sectionWrapper.current, { y: '+=200' }, { duration: 0.6, y: '-=200', autoAlpha: 1 })
      .pause();
    const cardAnimation = gsap
      .fromTo(
        [...cardRef.current.children],
        { x: '+=100' },
        { duration: 0.6, x: '-=100', autoAlpha: 1, delay: 0.5, stagger: 0.2 },
      )
      .pause();
    const observer = new IntersectionObserver(
      entry => {
        if (entry[0].intersectionRatio > 0.3) {
          cardAnimation.play();
          sectionWrapperAnimation.play();
        }
      },
      {
        threshold: 0.3,
      },
    );
    observer.observe(sectionWrapper.current);
  });

  return (
    <StyledWrapper ref={sectionWrapper}>
      <Heading as="h2" topLine>
        Projects
      </Heading>
      <Slider ref={cardRef}>
        {data ? (
          data.github.repositoryOwner.repositories.nodes.map(
            ({ name, description, url, projectsUrl }) => (
              <GitHubProjectCard
                key={name}
                name={name}
                description={description}
                sourceUrl={url}
                demoUrl={projectsUrl}
              />
            ),
          )
        ) : (
          <p>
            Something goes wrong
            <span role="img" aria-label="scary">
              😨
            </span>
          </p>
        )}
      </Slider>
    </StyledWrapper>
  );
};

export default ProjectsView;
