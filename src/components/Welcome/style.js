import styled, { keyframes } from "styled-components"
import { theme } from "../../Theme/mainTheme"

// const slideFromLeft = keyframes`
//   0%{
//   transform: translateX(80%);
//   }
//   100%{
//   transform: translateX(0);
//   }
// `

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

  @media (min-width: ${theme.small}) {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 63%;
  }
  /* @media (min-width: ${theme.large}) {
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }  */
`

export const H1 = styled.h1`
  font-size: 3.125rem;
  font-weight: 300;
  letter-spacing: 1px;
  position: relative;
  @media (min-width: ${theme.small}) {
    font-size: 3.8rem;
  }
  @media (min-width: ${theme.medium}) {
    font-size: 4rem;
  }
  @media (min-width: ${theme.large}) {
    letter-spacing: 2px;
    font-size: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const Span = styled.span`
  @media (min-width: ${theme.large}) {
    min-width: 46vw;
    z-index: 1;
  }
`

export const Img = styled.img`
  z-index: -1;
  max-width: 190%;
  animation: ${opacity0to100} 0.8s alternate linear;
  transform: translate(-28%, -16%);
  @media (min-width: ${theme.small}) {
    transform: translate(-10%, -16%);
  }
  @media (min-width: ${theme.medium}) {
    transform: translate(6%, -10%) scale(1.15);
  }
  @media (min-width: ${theme.large}) {
    transform: translate(-24%, 12%) scale(1.05);
  }
  @media (min-width: ${theme.huge}) {
    transform: translate(-20%, 5%) scale(1.2);
  }
`

export const Section = styled.section`
  overflow: hidden;
  position: relative;
  margin-top: 8vh;
  @media (min-width: ${theme.small}) {
    margin-top: 12vh;
  }

  @media (min-width: ${theme.large}) {
    margin-top: 0;
    min-height: 100vh;
    display: flex;
    // justify-content: center;
    align-items: center;
  }
`
