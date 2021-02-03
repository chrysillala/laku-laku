import React from "react"
import Header from '../components/header'
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({data}) {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="Welcome to our site" />
        <h2>About {data.site.siteMetadata.title}</h2>
        <p>Such wow. Very React.</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`