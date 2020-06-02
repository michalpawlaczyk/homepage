import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import GlobalStyle from 'Theme/GlobalStyle';
import MainView from 'components/organisms/MainView/MainView';
import SkillsView from 'components/organisms/SkillsView/SkillsView';
import ContactView from 'components/organisms/ContactView/ContactView';
import ProjectsView from 'components/organisms/ProjectsView/ProjectsView';

export default ({ data }) => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Michal Pawlaczyk Homepage</title>
      </Helmet>
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
        title="Working knowlage"
        items={[
          { value: 'HTML5' },
          { value: 'CSS' },
          { value: 'React' },
          { value: 'JavaScript' },
          { value: 'GIT' },
        ]}
      />
      <SkillsView
        title="Know something about"
        items={[{ value: 'TypeScript' }, { value: 'Figma' }, { value: 'Gatsby' }]}
      />
      <SkillsView title="Want to learn" items={[{ value: 'React native' }, { value: 'Node.js' }]} />
      <ProjectsView data={data} />
      <ContactView
        title="Contact me 😄"
        paragraph="I’m open for new opportunities. If you have one for me we should talk!"
        linkedInLink="https://www.linkedin.com/in/michal-pawlaczyk/"
        githubLink="https://github.com/michalpawlaczyk"
        email="michal.pawlaczyk@outlook.com"
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
