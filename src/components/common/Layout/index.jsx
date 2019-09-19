import React from "react"
import { Global, Nav, Ul, Li, A } from "./style"
import Link from "gatsby"

export const Layout = ({ children }) => (
  <>
    <Global />
    <Nav>
      <Ul>
        <Li>
          <A href="#projects">Projects</A>
        </Li>
        <Li>
          <A href="#skills">Skills</A>
        </Li>
        <Li>
          <A href="#contact">Contact</A>
        </Li>
      </Ul>
    </Nav>
    {children}
  </>
)
