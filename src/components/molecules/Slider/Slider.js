import React, { useRef, useEffect, useState, forwardRef } from 'react';
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

const Slider = forwardRef(({ children, observeElement, ...others }, ref) => {
  const projectsWrapperRef = useRef(null);

  const [isSlideLeftAvailable, setIsSlideLeftAvailable] = useState(false);
  const [isSlideRightAvailable, setIsSlideRightAvailable] = useState(false);

  const handleIsSlideAvailable = () => {
    projectsWrapperRef.current.scrollLeft + projectsWrapperRef.current.offsetWidth >=
    projectsWrapperRef.current.scrollWidth - 10
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
  }, []);

  return (
    <StyledSlider ref={ref} {...others}>
      <StyledSlideButton onClick={handleSlideToRight} right isVisible={isSlideRightAvailable} />
      <StyledSlideButton onClick={handleSlideToLeft} isVisible={isSlideLeftAvailable} />
      <StyledProjectsWrapper onScroll={handleIsSlideAvailable} ref={projectsWrapperRef}>
        {children}
      </StyledProjectsWrapper>
    </StyledSlider>
  );
});

export default Slider;
