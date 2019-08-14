import React from 'react'
import {H2, P, IconWrapper, Section} from './style'
import LinkedIn from '../../../../static/LinkedInIcon.svg'
import Github from '../../../../static/GithubWhiteIcon.svg'


export const Contact = () => (
  <Section>
    <H2>Contact me <span>😄</span></H2>
    <P>I’m open for new opportunities. If you have one for me we should talk!</P>
    <IconWrapper>
      <a href=""><img src={LinkedIn} alt="LinkedIn."/></a>
      <a href=""><img src={Github} alt="Github."/></a>
    </IconWrapper>
    <a href="mailto:michallpawlaczyk@gmail.com">michallpawlaczyk@gmail.com</a>
  </Section>
)