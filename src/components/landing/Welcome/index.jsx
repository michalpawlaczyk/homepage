import React from "react"
import { Title, Section, H1, Img, Span } from "./style"
import code from "../../../../static/webdev3.svg"

export const Welcome = () => (
  <Section>
    <Title>
      <H1>
        <Span>
          Hey there! 👋 I’m Michał and I’m aspiring to frontend developer
        </Span>
        <Img src={code} alt={"web developer."} />
      </H1>
    </Title>
  </Section>
)
