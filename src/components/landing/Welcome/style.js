import styled, { keyframes } from "styled-components"
import media from "styled-media-query"
import customMedia from "../../common/Responsibility/responsibility"

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
  ${customMedia.greaterThan("large")`
    // max-width: 100%;
    // flex-direction: row;
    // justify-content: space-between;
    // align-items: flex-end;
  `}
`

export const H1 = styled.h1`
  font-size: 3.125rem;
  font-weight: 300;
  letter-spacing: 1px;
  position: relative;
  ${media.greaterThan("small")`
      font-size: 3.8rem;
  `}
  ${customMedia.greaterThan("medium")`
      font-size: 4rem;
   `}
  ${customMedia.greaterThan("large")`
    letter-spacing: 2px;
    font-size: 4.25rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
  `}
`
export const Span = styled.span`
  ${customMedia.greaterThan("large")`
  min-width: 46vw;
  z-index: 1;
  `}
`

export const Img = styled.img`
  z-index: -1;
  max-width: 190%;
  animation: ${slideFromLeft} 0.8s alternate linear;
  transform: translate(-28%, -16%);
  ${media.greaterThan("small")`
     transform: translate(-10%, -16%);
  `}
  ${customMedia.greaterThan("medium")`
      transform: translate(6%, -10%) scale(1.15);
   `}
   ${customMedia.greaterThan("large")`
    transform: translate(-24%, 12%) scale(1.05);
  `}
`

export const Section = styled.section`
  overflow: hidden;
  position: relative;
  margin-top: 8vh;
  ${media.greaterThan("small")`
     margin-top: 12vh;
     `}

  ${customMedia.greaterThan("large")`
    margin-top: 0;
    min-height: 100vh;
    display: flex;
    // justify-content: center;
    align-items: center;
  `}
`
