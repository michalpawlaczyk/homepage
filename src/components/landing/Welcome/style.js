import styled, { keyframes } from 'styled-components'
import code from '../../../../static/webdev3.svg'

const slideFromLeft = keyframes`
  0%{
  transform: translateX(100%);
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #353238;
  max-width: 53%;
  margin-left: 5vw;
  font-size: 45px;
  z-index: 1;
  animation: ${opacity0to100} 2s alternate;
  position: relative;
  
`

export const H1 = styled.h1`
  font-weight: lighter;
  height: 400px;
`

// export const ImageWrapper = styled.div`
//   background-image: url(${code});
//   background-repeat: no-repeat;
//   background-position: center;
//   min-width: 60%;
//   height: 100vh;
//   animation: ${slideFromLeft} 1.3s alternate linear;
//   position: absolute;
//   top: 0;
//   right: 0;
// `

export const Img = styled.img`
  z-index: -1;
  max-width: 60%;
  height: 100vh;
  animation: ${slideFromLeft} 1.3s alternate linear;
  position: absolute;
  top: 10vh;
  right: 0;
`

export const Section = styled.section`
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
  position: relative;
`