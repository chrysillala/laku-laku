import React from "react"
import { css } from "@emotion/react"

export default function Footer(props) {
  return (
    <footer css={css`
      background-color: turquoise;
      color: white;
      padding: 2rem;
      text-align: center
      `}>
      This is footer
    </footer>
  )
}