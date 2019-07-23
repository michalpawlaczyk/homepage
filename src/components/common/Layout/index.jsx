import React from 'react'
import { Global, Nav, Ul, Li, A} from './style'

export const Layout = ({ children }) => (
  <>
    <Global />
    <Nav>
      <Ul>
        <Li><A href="#">Projects</A></Li>
        <Li><A href="#">Skills</A></Li>
        <Li><A href="#">Contact</A></Li>
      </Ul>
    </Nav>
    {children}
  </>
)