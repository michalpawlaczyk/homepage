import React, { useRef, useEffect, useState, forwardRef } from 'react';
import styled from 'styled-components';
import arrow from 'static/arrow.svg';

const StyledProjectsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin: 4vh;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
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

  & > span {
    opacity: 0;
  }
`;

const Slider = forwardRef(({ children, ...others }, ref) => {
  // const projectsWrapperRef = ref;

  const [isSlideLeftAvailable, setIsSlideLeftAvailable] = useState(false);
  const [isSlideRightAvailable, setIsSlideRightAvailable] = useState(false);

  const handleIsSlideAvailable = () => {
    ref.current.scrollLeft + ref.current.offsetWidth >= ref.current.scrollWidth - 10
      ? setIsSlideRightAvailable(false)
      : setIsSlideRightAvailable(true);
    ref.current.scrollLeft === 0 ? setIsSlideLeftAvailable(false) : setIsSlideLeftAvailable(true);
  };
  const handleSlideToRight = () => {
    ref.current.scrollLeft += ref.current.offsetWidth;
  };
  const handleSlideToLeft = () => {
    ref.current.scrollLeft -= ref.current.offsetWidth;
  };

  useEffect(() => {
    handleIsSlideAvailable();
  }, []);

  return (
    <StyledSlider {...others}>
      <StyledSlideButton onClick={handleSlideToRight} right isVisible={isSlideRightAvailable}>
        <span>Next</span>
      </StyledSlideButton>
      <StyledSlideButton onClick={handleSlideToLeft} isVisible={isSlideLeftAvailable}>
        <span>Previous</span>
      </StyledSlideButton>
      <StyledProjectsWrapper onScroll={handleIsSlideAvailable} ref={ref}>
        {children}
      </StyledProjectsWrapper>
    </StyledSlider>
  );
});
// ref = { projectsWrapperRef }

export default Slider;
