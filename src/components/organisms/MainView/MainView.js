import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import theme from 'Theme/mainTheme';
import background from 'static/background.svg';

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const StyledTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 600px;
  margin: 0 16%;
  opacity: 0;
`;

const StyledHeading = styled.h1`
  margin: 0;
  font-size: ${theme.xxxl};
  letter-spacing: 2px;
  @media (min-width: ${theme.small}) {
    font-size: ${theme.font.xxxl};
  }
`;

const StyledParagraph = styled.p`
  font-size: ${theme.font.xs};
  line-height: 2.5rem;
  letter-spacing: 1px;
  @media (min-width: ${theme.small}) {
    font-size: ${theme.font.s};
  }
`;

const StyledImage = styled.img`
  height: 100vh;
  position: absolute;
  bottom: 0;
  right: -120%;
  z-index: -2;
  opacity: 0;
  @media (min-width: ${theme.small}) {
    right: -70%;
  }
  @media (min-width: ${theme.medium}) {
    right: -40%;
  }
  @media (min-width: ${theme.large}) {
    right: 0;
  }
`;

const MainView = ({ heading, paragraph }) => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.set([textRef.current, backgroundRef.current], { autoAlpha: 0 });
    gsap.fromTo(
      backgroundRef.current,
      { x: 300, autoAlpha: 0, scale: 1 },
      { x: 0, autoAlpha: 1, duration: 1, scale: 1.3, ease: 'power3.out' },
    );
    gsap
      .fromTo(
        textRef.current,
        { autoAlpha: 0, x: -90 },
        { autoAlpha: 1, x: 0, ease: 'power3.out', duration: 1, delay: 0.5 },
      )
      .play();
  });

  return (
    <StyledSection ref={sectionRef}>
      <StyledTextWrapper ref={textRef}>
        <StyledHeading>{heading}</StyledHeading>
        <StyledParagraph>{paragraph}</StyledParagraph>
      </StyledTextWrapper>
      <StyledImage src={background} ref={backgroundRef} />
    </StyledSection>
  );
};

export default MainView;
