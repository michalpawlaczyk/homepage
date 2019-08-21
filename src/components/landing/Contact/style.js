import styled from "styled-components"
import media from "styled-media-query"
import customMedia from "../../common/Responsibility/responsibility"

export const Section = styled.section`
  background: #353238;
  border-top-right-radius: 33px;
  border-top-left-radius: 33px;
  color: #ffffff;
  padding-bottom: 1.2em;
`

export const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  padding-top: 0.6em;

  ${media.greaterThan("small")`
      font-size: 3rem; 
   `}
  ${customMedia.greaterThan("medium")`
      font-size: 3.3rem; 
   `}
`

export const P = styled.p`
  font-weight: 200;
  font-size: 1.25rem;
  margin: 0 1em 0.5em;
  ${media.greaterThan("small")`
      font-size: 1.5rem; 
   `}
  ${media.greaterThan("medium")`
      font-size: 1.6rem; 
   `}
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

export const Icon = styled.img`
  width: 60px;
  margin-right: 20px;
  ${media.greaterThan("small")`
      width: 80px; 
   `}
`

export const Email = styled.a`
  display: block;
  //width: 100%;
  text-align: center;
  color: #0593fb;
  font-size: 1.3rem;
  margin: 0.8em 0;
  text-decoration: none;
  ${media.greaterThan("small")`
      font-size: 1.5rem; 
   `}
  ${media.greaterThan("medium")`
    font-size: 1.6rem; 
  `}
`

export const EmailWrapper = styled.span`
  &::after {
    display: block;
    content: "";
    width: 76%;
    margin: 0.2em auto 0;
    height: 2px;
    border-bottom: 2px #0593fb solid;
  }
`
