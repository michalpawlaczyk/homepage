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
export const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 0 0.3em;
`;

export const Li = styled.li`
  font-weight: 200;
  font-size: 1.375rem;
  margin-bottom: 0.2em;
`;