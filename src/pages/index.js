import React from "react"
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import tw from "twin.macro"

export default function Home({ data }) {
  // console.log(data)
  return (
    <Layout>
      <img src="https://source.unsplash.com/1200x400/?plant" width="1200" height="400" alt="hero" css={tw`w-full`} loading="lazy" />
      <Img fluid={data.file.childImageSharp.fluid} alt="Gatsby logo" />
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
    file(relativePath: { eq: "images/awan-1.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`