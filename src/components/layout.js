import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import { Global, css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import tw from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

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
      css={[
        css`
          margin: 0 auto;
          padding: ${rhythm(8)};
          padding-top: ${rhythm(1.5)};
        `,
        tw`container mx-auto`]}
      >
      <Global
        styles={css`
          html {
            background-color: azure;
          }
        `}
      />
      <Header metaTitle={data.site.siteMetadata.title} />
      {children}
      <Footer footerText="This is footer" />
    </main>
  )
}