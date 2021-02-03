import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
// import { rhythm } from "../utils/typography"
import tw from "twin.macro"

export default function Header(props) {
  return (
    <article key={props.key} css={tw`mb-8`}>
      <Link
          to={props.slug}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
        <div css={tw`bg-white border-4 border-blue-700 rounded-xl p-4`}>
          <h3
            css={tw`mb-4 text-lg font-bold`}>
            {props.title}{" "}
            <span
              css={css`
                color: #bbb;
              `}
            >
              — {props.date}
            </span>
          </h3>
          <p>{props.excerpt}</p>
        </div>
      </Link>
    </article>
  )
}