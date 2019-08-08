import React from 'react'
import {Title, Section, H1, Img} from './style'
import code from '../../../../static/webdev3.svg'

export const Welcome = () => (
  <Section>
    <Title>
        <H1 >Hey there! 👋 I’m Michał and I’m aspiring to frontend developer</H1>
    </Title>
    <Img src={code}/>
  </Section>
)