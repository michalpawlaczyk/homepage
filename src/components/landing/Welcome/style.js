import styled from 'styled-components'
import code from '../../../../static/code.jpg'

export const Title = styled.div`
  color: lightcoral;
  min-width: 50%;
  margin-left: 5vw;
  font-size: 50px;
  z-index: 1;
  
`

export const ImageWrapper = styled.div`
  background-image: url(${code});
  background-position: center;
  min-width: 50%;
  height: 100vh;
`

export const Section = styled.section`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  min-height: 100vh;
  align-items: center;
  position: relative;
`