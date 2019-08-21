import React from "react"
import { H2, P, IconWrapper, Section, Icon, Email, EmailWrapper } from "./style"
import LinkedIn from "../../../../static/LinkedInIcon.svg"
import Github from "../../../../static/GithubWhiteIcon.svg"

export const Contact = () => (
  <Section>
    <H2>
      Contact me <span>😄</span>
    </H2>
    <P>
      I’m open for new opportunities. If you have one for me we should talk!
    </P>
    <IconWrapper>
      <a href="">
        <Icon src={LinkedIn} alt="LinkedIn." />
      </a>
      <a href="">
        <Icon src={Github} alt="Github." />
      </a>
    </IconWrapper>
    <Email href="mailto:michallpawlaczyk@gmail.com">
      <EmailWrapper>michallpawlaczyk@gmail.com</EmailWrapper>
    </Email>
  </Section>
)
