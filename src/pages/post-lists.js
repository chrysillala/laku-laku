import React from "react"
// import Header from '../components/header'
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
// import { css } from "@emotion/react"
// import { rhythm } from "../utils/typography"

export default function PostLists({data}) {
  return (
    <Layout>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Excerpt</th>
            </tr>
          </thead>
          <tbody>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <tr key={node.id}>
                <td>{node.frontmatter.date}</td>
                <td>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </td>
                <td>{node.excerpt}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`