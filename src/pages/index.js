import React from "react"
import Header from '../components/header'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { graphql } from "gatsby"
import tw from "twin.macro"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <Header headerText="Home" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/500x200/?nature" alt="" />
      <h4 css={tw`my-4`}>{data.allMarkdownRemark.totalCount} Posts</h4>
      <section>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostList
              key={node.id}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
        ))}
      </section>
    </Layout>
  );
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
            date(formatString: "DD MMMM, YYYY")
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