import styled from "styled-components"
import { theme } from "../../Theme/mainTheme"

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

  @media (min-width: ${theme.small}) {
    font-size: 3rem;
  }
  @media (min-width: ${theme.medium}) {
    font-size: 3.3rem;
  }
  @media (min-width: ${theme.large}) {
    font-size: 3.75rem;
    text-align: left;
    margin: 0 0 0.3em 0.7em;
  }
`
export const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 0 0.3em;
  @media (min-width: ${theme.small}) {
    font-size: 2.4rem;
    margin: 0 0 0 0.9em;
  }
  @media (min-width: ${theme.large}) {
    margin: 0 0 0 1.8em;
  }
`

export const Li = styled.li`
  font-weight: 200;
  font-size: 1.375rem;
  margin: 0 0 0.2em 0;
  @media (min-width: ${theme.small}) {
    font-size: 1.6rem;
    margin: 0 0 0.2em 0.8em;
  }
  @media (min-width: ${theme.large}) {
    margin: 0 0 0.2em 2.3em;
  }
`

export const Ul = styled.ul`
  @media (min-width: ${theme.small}) {
    margin-left: 3vw;
    column-count: 2;
  }
`
