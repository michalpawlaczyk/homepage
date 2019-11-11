import styled from "styled-components"
import DemoIcon from "../../static/DemoIcon.svg"
import CodeIcon from "../../static/CodeIcon.svg"
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

export const H4 = styled.h4`
  font-size: 1.25rem;
  margin-left: 0.5em;
  @media (min-width: ${theme.small}) {
    font-size: 1.4rem;
  }
`

export const P = styled.p`
  font-size: 1.125rem;
  margin: 0 0 0.6em 0.6em;
  @media (min-width: ${theme.small}) {
    font-size: 1.25rem;
  }
`

export const ProjectSection = styled.section`
  width: 90%;
  margin: 3em auto;
  padding-top: 1em;
  box-shadow: 0px 6px 16px rgba(24, 41, 67, 0.09);
  border-radius: 8px;
`

export const ButtonWrapper = styled.div`
  background: #f5f7fa;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5em 0;
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
`

export const A = styled.a`
  color: #0593fb;
  text-decoration: none;
  font-size: 1.125rem;
  color: #0593fb;

  @media (min-width: ${theme.small}) {
    font-size: 1.25rem;
  }
`

export const DemoSpan = styled.span`
  line-height: 32px;
  &::before {
    content: url(${DemoIcon});
    margin: 0 0.4em 0 0;
  }
`

export const CodeSpan = styled.span`
  &::before {
    content: url(${CodeIcon});
    display: inline-block;
    margin: 0 0.4em 0 0;
  }
`

export const ProjectsWrapper = styled.div`
  @media (min-width: ${theme.medium}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
