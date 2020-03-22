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
  background: url(${background}) no-repeat bottom left;
  background-size: 2560px;
`;

const StyledTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 600px;
  margin: 0 16%;
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

const MainView = ({ heading, paragraph }) => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  return (
    <StyledSection ref={sectionRef}>
      <StyledTextWrapper ref={textRef}>
        <StyledHeading>{heading}</StyledHeading>
        <StyledParagraph>{paragraph}</StyledParagraph>
      </StyledTextWrapper>
    </StyledSection>
  );
};

export default MainView;
