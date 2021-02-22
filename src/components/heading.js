import React from "react"
import tw from "twin.macro"

export default function Heading(props) {
  return <h1 css={tw`text-5xl`}>{props.headerText}</h1>
}