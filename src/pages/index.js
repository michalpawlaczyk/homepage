import React from "react"
import { Welcome, Skills } from '../components/landing'
import {Layout} from "../components/common/Layout/index"

export default () => (
  <Layout>
    <main>
      <Welcome />
      <Skills/>
    </main>
  </Layout>
)
