import React from "react"
import { css } from "@emotion/react"

const currentYear = () => {
  const date = new Date()
  return date.getFullYear()
}

export default function Footer({footerText}) {
  return (
    <footer css={css`
      background-color: turquoise;
      color: white;
      padding: 2rem;
      text-align: center
      `}>
      &copy;{" "}{currentYear()}{" "}{footerText}
    </footer>
  )
}