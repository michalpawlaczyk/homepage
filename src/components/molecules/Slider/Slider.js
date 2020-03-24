import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import arrow from 'static/arrow.svg';

const StyledProjectsWrapper = styled.section`
  max-height: 520px;
  display: flex;
  flex-direction: row;
  margin: 4vh;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledSlider = styled.div`
  position: relative;
`;

const StyledSlideButton = styled.button`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  position: absolute;
  top: 50%;
  ${({ right }) => (right ? 'right: 2%' : 'left: 2%')};
  height: 50px;
  width: 50px;
  z-index: 2;
  border: none;
  background: transparent url(${arrow}) no-repeat;
  background-size: 100%;
  overflow: hidden;
  ${({ right }) =>
    right ? 'transform: translateY(-50%) rotate(180deg)' : 'transform: translateY(-50%)'};
`;

const Slider = ({ children, observeElement }) => {
  const projectsWrapperRef = useRef(null);
  const [isSlideLeftAvailable, setIsSlideLeftAvailable] = useState(false);
  const [isSlideRightAvailable, setIsSlideRightAvailable] = useState(false);
  const [isAnimationPlayed, setIsAnimationPlayed] = useState(false);

  const handleIsSlideAvailable = () => {
    projectsWrapperRef.current.scrollLeft + projectsWrapperRef.current.offsetWidth >=
    projectsWrapperRef.current.scrollWidth
      ? setIsSlideRightAvailable(false)
      : setIsSlideRightAvailable(true);
    projectsWrapperRef.current.scrollLeft === 0
      ? setIsSlideLeftAvailable(false)
      : setIsSlideLeftAvailable(true);
  };
  const handleSlideToRight = () => {
    projectsWrapperRef.current.scrollLeft += projectsWrapperRef.current.offsetWidth;
  };
  const handleSlideToLeft = () => {
    projectsWrapperRef.current.scrollLeft -= projectsWrapperRef.current.offsetWidth;
  };

  useEffect(() => {
    handleIsSlideAvailable();
    if (!!observeElement && !isAnimationPlayed) {
      setIsAnimationPlayed(true);
      gsap.set(projectsWrapperRef.current, { autoAlpha: 0 });
      const cardAnimation = gsap
        .fromTo(
          projectsWrapperRef.current,
          { scale: 0.7 },
          { duration: 0.6, autoAlpha: 1, scale: 1 },
        )
        .pause();
      const observer = new IntersectionObserver(
        entry => {
          if (entry[0].intersectionRatio > 0.3) {
            cardAnimation.play();
          }
        },
        {
          threshold: 0.3,
        },
      );
      observer.observe(observeElement.current);
    }
  });

  return (
    <StyledSlider>
      <StyledSlideButton onClick={handleSlideToRight} right isVisible={isSlideRightAvailable} />
      <StyledSlideButton onClick={handleSlideToLeft} isVisible={isSlideLeftAvailable} />
      <StyledProjectsWrapper ref={projectsWrapperRef} onScroll={handleIsSlideAvailable}>
        {children}
      </StyledProjectsWrapper>
    </StyledSlider>
  );
};

export default Slider;
