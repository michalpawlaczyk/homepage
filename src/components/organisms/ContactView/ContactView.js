import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LinkedIn from 'static/LinkedInIcon.svg';
import Github from 'static/GithubWhiteIcon.svg';
import theme from 'Theme/mainTheme';

const StyledSection = styled.section`
  background: #353238;
  border-top-right-radius: 33px;
  border-top-left-radius: 33px;
  color: #ffffff;
  padding-bottom: 1.2em;
`;
const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
const StyledIcon = styled.img`
  width: 60px;
  margin-right: 20px;
  @media (min-width: ${theme.small}) {
    width: 80px;
  }
`;
const StyledEmail = styled.a`
  display: block;
  text-align: center;
  color: #ffffff;
  font-size: ${theme.font.s};
  margin: 0.8em 0;
  text-decoration: none;
`;

const ContactView = ({ title, paragraph, linkedInLink, githubLink, email }) => (
  <StyledSection>
    <Heading as="h2">{title}</Heading>
    <Paragraph>{paragraph}</Paragraph>
    <StyledIconWrapper>
      <a href={linkedInLink}>
        <StyledIcon src={LinkedIn} alt="LinkedIn." />
      </a>
      <a href={githubLink}>
        <StyledIcon src={Github} alt="Github." />
      </a>
    </StyledIconWrapper>
    <StyledEmail href={email}>{email}</StyledEmail>
  </StyledSection>
);

export default ContactView;
