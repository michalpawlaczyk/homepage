import React from "react"
import { Welcome } from "../components/Welcome/index"
import { Skills } from "../components/Skills/index"
import { Projects } from "../components/Projects/index"
import { ProjectsDescription } from "../components/Projects/index"
import { Contact } from "../components/Contact/index"
import { graphql } from "gatsby"
import GlobalStyle from "../Theme/GlobalStyle"

export default ({ data }) => {
  return (
    <main>
      <GlobalStyle />
      <Welcome />
      <Skills id="skills" />
      <Projects id="projects">
        {data ? (
          data.github.repositoryOwner.repositories.nodes.map(element => (
            <ProjectsDescription
              key={element.name}
              name={element.name}
              description={element.description}
              url={element.url}
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
      </Projects>
      <Contact id="contact" />
    </main>
  )
}

export const query = graphql`
  query {
    github {
      repositoryOwner(login: "michalpawlaczyk") {
        repositories(first: 10) {
          nodes {
            url
            description
            name
          }
        }
      }
    }
  }
`
