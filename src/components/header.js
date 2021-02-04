import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

const ListLink = props => (
  <li css={css`
    display: inline-block;
    margin-right: 1rem;
  `}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Heading({metaTitle}) {
  return (
    <header css={css`margin-bottom: 1.5rem;`}>
      <Link to="/" css={css`
        text-shadow: none;
        background-image: none;
      `}>
        <h3 css={css`display: inline;` }>{metaTitle}</h3>
      </Link>
      <ul css={css`listStyle: none; float: right;`}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  )
}