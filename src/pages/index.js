import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from 'Theme/GlobalStyle';
import theme from 'Theme/mainTheme';
import MainView from 'components/organisms/MainView/MainView';
import image from 'static/webdev3.svg';
import SkillsView from 'components/organisms/SkillsView/SkillsView';
import ContactView from 'components/organisms/ContactView/ContactView';
import GitHubProjectCard from 'components/molecules/GitHubProjectCard/GitHubProjectCard';
import Heading from 'components/atoms/Heading/Heading';

const StyledProjectsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 4vh;
  grid-gap: 30px;
  justify-items: center;
  @media (min-width: ${theme.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${theme.large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default ({ data }) => {
  return (
    <main>
      <GlobalStyle />
      <MainView
        title={`Hey there! 👋 I’m Michał and I’m aspiring to frontend developer`}
        image={image}
        imageAlt={'Web developer.'}
      />
      <SkillsView
        mainTitle="Skills"
        listData={[
          {
            list: {
              listTitle: 'Working knowlage',
              listItems: [
                { value: 'HTML5' },
                { value: 'CSS' },
                { value: 'Figma' },
                { value: 'JavaScript' },
                { value: 'GIT' },
              ],
            },
          },
        ]}
      />
      <SkillsView
        listData={[
          {
            list: {
              listTitle: 'Know something about',
              listItems: [
                { value: 'Progressive web apps' },
                { value: 'NPM' },
                { value: 'Gulp' },
                { value: 'React JS' },
              ],
            },
          },
        ]}
      />
      <SkillsView
        listData={[
          {
            list: {
              listTitle: 'Want to learn',
              listItems: [{ value: 'React native' }, { value: 'Node.js' }],
            },
          },
        ]}
      />
      <Heading as="h2" topLine>
        Projects
      </Heading>
      <StyledProjectsWrapper>
        {data ? (
          data.github.repositoryOwner.repositories.nodes.map(element => (
            <GitHubProjectCard
              key={element.name}
              name={element.name}
              description={element.description}
              sourceUrl={element.url}
            />
          ))
        ) : (
          <p>
            Something goes wrong
            <span role="img" aria-label="scary">
              😨
            </span>
          </p>
        )}
      </StyledProjectsWrapper>
      <ContactView
        title="Contact me 😄"
        paragraph="I’m open for new opportunities. If you have one for me we should talk!"
        linkedInLink="https://pl.linkedin.com/"
        githubLink="https://github.com/michalpawlaczyk"
        email="michallpawlaczyk@gmail.com"
      />
    </main>
  );
};

export const query = graphql`
  query {
    github {
      repositoryOwner(login: "michalpawlaczyk") {
        repositories(first: 9) {
          nodes {
            url
            description
            name
          }
        }
      }
    }
  }
`;
