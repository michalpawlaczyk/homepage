import styled, { keyframes } from "styled-components"
import media from "styled-media-query"
import customMedia from "../../common/Responsibility/responsibility"

export const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;

  &::before {
    content: "";
    display: block;
    margin: 0 auto 0.5em;
    border-top: 1px #262525 solid;
    width: 90vw;
    height: 2px;
  }

  ${media.greaterThan("small")`
      font-size: 3rem; 
   `}
  ${customMedia.greaterThan("medium")`
      font-size: 3.3rem; 
   `}
`
export const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 0 0.3em;
  ${media.greaterThan("small")`
      font-size: 2.4rem; 
      margin: 0 0 0 0.9em;
   `}
`

export const Li = styled.li`
  font-weight: 200;
  font-size: 1.375rem;
  margin: 0 0 0.2em 0;
  ${media.greaterThan("small")`
      font-size: 1.6rem;
      margin: 0 0 0.2em 0.8em; 
   `}
`

export const Ul = styled.ul`
  ${media.greaterThan("small")`
    margin-left: 3vw;
    column-count: 2;
    `}
`
