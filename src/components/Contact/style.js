import styled from 'styled-components';
import { theme } from '../../Theme/mainTheme';

export const Section = styled.section`
  background: #353238;
  border-top-right-radius: 33px;
  border-top-left-radius: 33px;
  color: #ffffff;
  padding-bottom: 1.2em;
`;

export const P = styled.p`
  font-weight: 200;
  font-size: 1.25rem;
  margin: 0 1em 0.5em;
  @media (min-width: ${theme.small}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${theme.medium}) {
    font-size: 1.6rem;
  }
  @media (min-width: ${theme.small}) {
    margin: 0 2em 0.5em;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Icon = styled.img`
  width: 60px;
  margin-right: 20px;
  @media (min-width: ${theme.small}) {
    width: 80px;
  }
`;

export const Email = styled.a`
  display: block;
  //width: 100%;
  text-align: center;
  color: #0593fb;
  font-size: 1.3rem;
  margin: 0.8em 0;
  text-decoration: none;
  @media (min-width: ${theme.small}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${theme.medium}) {
    font-size: 1.6rem;
  }
`;

export const EmailWrapper = styled.span`
  &::after {
    display: block;
    content: '';
    width: 76%;
    margin: 0.2em auto 0;
    height: 2px;
    border-bottom: 2px #0593fb solid;
  }
`;
