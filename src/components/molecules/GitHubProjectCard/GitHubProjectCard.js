import React from 'react';
import styled from 'styled-components';
import GitHubLogo from 'static/GithubIcon.svg';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import theme from 'Theme/mainTheme';
import CodeIcon from 'static/CodeIcon.svg';
import DemoIcon from 'static/DemoIcon.svg';

const StyledWrapper = styled.div`
  width: 90%;
  min-width: 350px;
  max-width: 380px;
  min-height: 500px;
  box-shadow: 0px 6px 16px rgba(24, 41, 67, 0.09);
  border-radius: 8px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  position: relative;
  margin: 0 30px;
`;
const StyledHeading = styled.h4`
  font-size: ${theme.font.m};
  text-align: left;
  font-weight: 300;
  padding-left: 20px;
  margin: 20px 0 30px;
  @media (min-width: ${theme.large}) {
    font-size: ${theme.font.l};
  }
`;
const StyledLogo = styled.img`
  height: 140px;
  width: 140px;
  margin: 40px auto 0;
`;

const StyledParagraph = styled(Paragraph)`
  padding-left: 20px;
  margin: 0;
  @media (min-width: ${theme.small}) {
    margin: 0;
  }
`;

const StyledButtonsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
  background: #f5f7fa;
`;

const StyledButton = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: block;
  text-align: center;
  color: #000000;
  position: relative;
  cursor: pointer;

  ::before {
    content: '';
    background: url(${({ githubIcon }) => (githubIcon ? CodeIcon : DemoIcon)});
    background-repeat: no-repeat;
    display: block;
    height: 130%;
    width: 100%;
    position: absolute;
    top: -25%;
    left: 15%;
  }
`;

const GitHubProjectCard = ({ name, description, sourceUrl, demoUrl }) => (
  <StyledWrapper>
    <StyledLogo src={GitHubLogo} alt="github logo." />
    <div>
      <StyledHeading>{name}</StyledHeading>
      <StyledParagraph>{description}</StyledParagraph>
    </div>
    <StyledButtonsWrapper>
      <StyledButton href={demoUrl}>Demo</StyledButton>
      <StyledButton href={sourceUrl} githubIcon>
        Github
      </StyledButton>
    </StyledButtonsWrapper>
  </StyledWrapper>
);

export default GitHubProjectCard;
