import React from 'react';
import styled from 'styled-components';
import GitHubLogo from 'static/GithubIcon.svg';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import theme from 'Theme/mainTheme';
import CodeIcon from 'static/CodeIcon.svg';
import DemoIcon from 'static/DemoIcon.svg';

const StyledWrapper = styled.div`
  width: 360px;
  min-width: 360px;
  min-height: 500px;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 20px;
  margin: 0 30px;
  box-shadow: 0px 6px 16px rgba(24, 41, 67, 0.09);
  border-radius: 8px;
`;
const StyledHeading = styled.h4`
  overflow-wrap: break-word;
  max-width: 320px;
  font-size: ${theme.font.m};
  text-align: left;
  font-weight: 300;
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
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  text-align: center;
  color: #000000;
  cursor: pointer;

  & > span {
    position: relative;
    ::before {
      content: '';
      background: url(${({ githubIcon }) => (githubIcon ? CodeIcon : DemoIcon)});
      background-repeat: no-repeat;
      display: block;
      height: 40px;
      width: 40px;
      position: absolute;
      top: -25%;
      left: -40px;
    }
  }
`;

const GitHubProjectCard = ({ name, description, sourceUrl, demoUrl = '' }) => (
  <StyledWrapper>
    <StyledLogo src={GitHubLogo} alt="github logo." />
    <div>
      <StyledHeading>{name}</StyledHeading>
      <StyledParagraph>{description}</StyledParagraph>
    </div>
    <StyledButtonsWrapper>
      {demoUrl !== '' && (
        <StyledButton href={demoUrl} rel="noopener noreferrer" target="_blank">
          <span>Demo</span>
        </StyledButton>
      )}
      <StyledButton href={sourceUrl} rel="noopener noreferrer" target="_blank" githubIcon>
        <span>Github</span>
      </StyledButton>
    </StyledButtonsWrapper>
  </StyledWrapper>
);

export default GitHubProjectCard;
