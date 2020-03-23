import React from 'react';
import { graphql } from 'gatsby';
import GlobalStyle from 'Theme/GlobalStyle';
import MainView from 'components/organisms/MainView/MainView';
import SkillsView from 'components/organisms/SkillsView/SkillsView';
import ContactView from 'components/organisms/ContactView/ContactView';
import ProjectsView from 'components/organisms/ProjectsView/ProjectsView';

export default ({ data }) => {
  return (
    <main>
      <GlobalStyle />
      <MainView
        heading={
          <>
            Hello 👋,
            <br /> my name is Michał
          </>
        }
        paragraph="I'm aspiring to frontend developer. I really like frontend and mobile development. Outside
          of programming I'm intrested in simracing and cars"
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
      <ProjectsView data={data} />
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
