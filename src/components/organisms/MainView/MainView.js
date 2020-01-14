import React from 'react';
import styled, { keyframes } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import theme from 'Theme/mainTheme';

const opacity0to100 = keyframes`
  0%{
  opacity: 0;
  }
  100%{
  opacity: 1;
  }
`;

export const StyledTitle = styled.div`
  color: #353238;
  z-index: 1;
  animation: ${opacity0to100} 2s alternate;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 950px) {
    padding: 0 20px;
    display: grid;
    grid-template-columns: 60vw 1fr;
    grid-template-row: 1fr 400px;
  }
`;

const StyledWrapper = styled.section`
  overflow: hidden;
  margin-top: 4vh;
`;

const StyledHeading = styled(Heading)`
  font-size: 4rem;
  letter-spacing: 1px;
  @media (min-width: ${theme.small}) {
    font-size: 4rem;
  }
  @media (min-width: 740px) {
    font-size: 4.9rem;
  }
  @media (min-width: 950px) {
    font-size: 5.4rem;
    min-width: 50%;
    text-align: left;
    grid-row: 1/2;
    grid-column: 1/2;
  }
  @media (min-width: 1440px) {
    font-size: 6rem;
  }
  @media (min-width: 1600px) {
    font-size: 6.8rem;
  }
`;
const StyledImage = styled.img`
  z-index: -1;
  max-width: 190%;
  animation: ${opacity0to100} 0.8s alternate linear;
  transform: translate(0, -13%) scale(1);
  @media (min-width: 950px) {
    transform: scale(1.1) translate(-30vw, -18%);
    grid-row: 2/3;
    grid-column: 2/3;
  }
  @media (min-width: 1440px) {
    transform: scale(1.1) translate(-20vw, -18%);
  }
  @media (min-width: 1600px) {
    transform: scale(1.2) translate(-15vw, -18%);
  }
`;

const MainView = ({ title, image, imageAlt }) => (
  <StyledWrapper>
    <StyledTitle>
      <StyledHeading as='h1'>{title}</StyledHeading>
      <StyledImage src={image} alt={imageAlt} />
    </StyledTitle>
  </StyledWrapper>
);

export default MainView;
