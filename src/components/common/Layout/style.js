import {createGlobalStyle} from "styled-components"
import styled from 'styled-components'
import './normalize.css'
import './style.css'

export const Global = createGlobalStyle`
  
`
export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 2;
  margin: 15px 0;
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`
export const Li = styled.li`
  position: relative;
  list-style: none;
  padding: 10px 20px;
  overflow: hidden;
`
export const A = styled.a`
    overflow: hidden;
    font-size: 20px;
    text-decoration: none;
    padding: 7px 15px;
    color: lightcoral;
    border: lightcoral 1.4px solid;
    border-radius: 15px;
    transition: color 0.3s linear ;
    
  &::before{
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    content: '';
    border-radius: 15px;
    width: 70%;
    height: 100%;
    background-color: lightcoral;
    transform: translateY(45px);
    transition: transform .2s linear;
    }
    
  &:hover::before{
  transform: translateY(0);
  }  
    &:hover{
      color: #ffffff;
    }
`