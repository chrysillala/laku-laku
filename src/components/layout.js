import React from "react"
import Footer from '../components/footer'
import { Global, css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import { useStaticQuery, Link, graphql } from "gatsby"

const ListLink = props => (
  <li css={css`
    display: inline-block;
    margin-right: 1rem;
  `}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  // StaticQuery is a new API introduced in Gatsby v2 that allows non-page components (like your layout.js component), to retrieve data via GraphQL queries
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <main
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}>
      <Global
        styles={css`
          html {
            background-color: azure;
          }
        `}
      />
      <header css={css`margin-bottom: 1.5rem;`}>
        <Link to="/" css={css`
          text-shadow: none;
          background-image: none;
        `}>
          <h3 css={css`display: inline;` }>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul css={css`listStyle: none; float: right;`}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
      <Footer footerText="This is footer" />
    </main>
  )
}