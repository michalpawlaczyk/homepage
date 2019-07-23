import React from 'react'
import { Global } from './style'

export const Layout = ({ children }) => (
  <>
    <Global />
    {children}
  </>
)