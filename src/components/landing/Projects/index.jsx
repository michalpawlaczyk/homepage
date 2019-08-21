import React from "react"
import {
  H2,
  ProjectSection,
  ButtonWrapper,
  Logo,
  Button,
  DemoSpan,
  CodeSpan,
  H4,
  P,
  A,
  ProjectsWrapper,
} from "./style"
import GitHubLogo from "../../../../static/GithubIcon.svg"

export const Projects = () => (
  <section>
    <H2>Projects</H2>
    <ProjectsWrapper>
      <ProjectSection>
        <Logo src={GitHubLogo} alt="github logo." />
        <H4>Example title</H4>
        <P>Lorem ipsum </P>
        <ButtonWrapper>
          <A href="#">
            <DemoSpan>Demo</DemoSpan>
          </A>
          <A href="#">
            <CodeSpan>Github</CodeSpan>
          </A>
        </ButtonWrapper>
      </ProjectSection>
      <ProjectSection>
        <Logo src={GitHubLogo} alt="github logo." />
        <H4>Example title</H4>
        <P>Lorem ipsum </P>
        <ButtonWrapper>
          <A href="#">
            <DemoSpan>Demo</DemoSpan>
          </A>
          <A href="#">
            <CodeSpan>Github</CodeSpan>
          </A>
        </ButtonWrapper>
      </ProjectSection>
      <ProjectSection>
        <Logo src={GitHubLogo} alt="github logo." />
        <H4>Example title</H4>
        <P>Lorem ipsum </P>
        <ButtonWrapper>
          <A href="#">
            <DemoSpan>Demo</DemoSpan>
          </A>
          <A href="#">
            <CodeSpan>Github</CodeSpan>
          </A>
        </ButtonWrapper>
      </ProjectSection>
    </ProjectsWrapper>
  </section>
)
