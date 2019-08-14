import React from 'react'
import {H2, ProjectSection, ButtonWrapper, Logo, Button, DemoSpan, CodeSpan, H4, P, A} from './style'
import GitHubLogo from '../../../../static/GithubIcon.svg'

export const Projects = () => (
  <section>
    <H2>Projects</H2>
    <ProjectSection>
      <Logo src={GitHubLogo} alt="github logo."/>
      <H4>Example title</H4>
      <P>Lorem ipsum </P>
      <ButtonWrapper>
        <Button><A href="#"> <DemoSpan>Demo</DemoSpan></A></Button>
        <Button><A href="#"><CodeSpan>Github</CodeSpan></A></Button>
      </ButtonWrapper>
    </ProjectSection>
    <ProjectSection>
      <Logo src={GitHubLogo} alt="github logo."/>
      <H4>Example title</H4>
      <P>Lorem ipsum </P>
      <ButtonWrapper>
        <Button><A href="#"> <DemoSpan>Demo</DemoSpan></A></Button>
        <Button><A href="#"><CodeSpan>Github</CodeSpan></A></Button>
      </ButtonWrapper>
    </ProjectSection>
    <ProjectSection>
    <Logo src={GitHubLogo} alt="github logo."/>
    <H4>Example title</H4>
    <P>Lorem ipsum </P>
    <ButtonWrapper>
      <Button><A href="#"> <DemoSpan>Demo</DemoSpan></A></Button>
      <Button><A href="#"><CodeSpan>Github</CodeSpan></A></Button>
    </ButtonWrapper>
  </ProjectSection>
  </section>
)