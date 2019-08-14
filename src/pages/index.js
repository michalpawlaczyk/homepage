import React from "react"
import { Welcome, Skills, Projects, Contact } from '../components/landing'
import {Layout} from "../components/common/Layout/index"

export default () => (
  <Layout>
    <main>
      <Welcome />
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  </Layout>
)
