import { createGlobalStyle, keyframes } from "styled-components"
import styled from 'styled-components'
import './normalize.css'
import './style.css'

const opacity0to100 = keyframes`
  0%{
  opacity: 0;
  }
  100%{
  opacity: 1;
  }
`

export const Global = createGlobalStyle`
  
`
export const Nav = styled.nav`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 2;
  margin:  30px 0;
  animation: ${opacity0to100} 1.5s alternate;
  @media(max-width: 600px){
  display: none;
  }
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
    color: #353238;
    border: #353238 1.4px solid;
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
    background-color: #353238;
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