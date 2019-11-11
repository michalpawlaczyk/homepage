import React from "react"
import {
  H2,
  ProjectSection,
  ButtonWrapper,
  Logo,
  DemoSpan,
  CodeSpan,
  H4,
  P,
  A,
  ProjectsWrapper,
} from "./style"
import GitHubLogo from "../../static/GithubIcon.svg"

export const Projects = ({ children }) => {
  return (
    <section>
      <H2>Projects</H2>
      <ProjectsWrapper>{children}</ProjectsWrapper>
    </section>
  )
}

export const ProjectsDescription = props => {
  return (
    <ProjectSection>
      <Logo src={GitHubLogo} alt="github logo." />
      <H4>{props.name}</H4>
      <P>{props.description}</P>
      <ButtonWrapper>
        <A href="#">
          <DemoSpan>Demo</DemoSpan>
        </A>
        <A href={props.url}>
          <CodeSpan>Github</CodeSpan>
        </A>
      </ButtonWrapper>
    </ProjectSection>
  )
}
