import styled, { keyframes } from 'styled-components'
import media from "styled-media-query";

export const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  
  &::before{
    content: '';
    display: block;
    margin: 0 auto 0.5em;
    border-top: 1px #262525 solid;
    width: 90vw;
    height: 2px;
  }
`;