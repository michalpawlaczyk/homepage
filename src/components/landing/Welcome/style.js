import styled, { keyframes } from 'styled-components'
import media from "styled-media-query";

const slideFromLeft = keyframes`
  0%{
  transform: translateX(80%);
  }
  100%{
  transform: translateX(0);
  }
`

const opacity0to100 = keyframes`
  0%{
  opacity: 0;
  }
  100%{
  opacity: 1;
  }
`

export const Title = styled.div`
  
  color: #353238;
  margin-left: 5vw;
  z-index: 1;
  animation: ${opacity0to100} 2s alternate;
  position: relative;
  
  ${media.greaterThan("small")`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 63%;
  `}
  
`;

export const H1 = styled.h1`
  font-size: 3.125rem;
  font-weight: 300;
  letter-spacing: 1px;
  position: relative;
  ${media.greaterThan("small")`
      font-size: 3.8rem;
  `}
`;

export const Img = styled.img`
  z-index: -1;
  max-width: 190%;
  animation: ${slideFromLeft} .8s alternate linear;
  transform: translate(-28%, -16%);
  ${media.greaterThan("small")`
     transform: translate(-10%, -16%);
  `}
  ${media.greaterThan("small")`
     transform: translate(-10%, -16%);
   `}
`

export const Section = styled.section`
  overflow: hidden;
  //min-height: 100vh;
  position: relative;
  margin-top: 8vh;
  ${media.greaterThan("small")`
     margin-top: 12vh;
     `}
`;