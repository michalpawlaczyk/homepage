import React from "react"
import {
  Welcome,
  Skills,
  Projects,
  ProjectsDescription,
  Contact,
} from "../components/landing"
import { Layout } from "../components/common/Layout/index"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <main>
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
            <p>Something goes wrong 😨</p>
          )}
        </Projects>
        <Contact id="contact" />
      </main>
    </Layout>
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
