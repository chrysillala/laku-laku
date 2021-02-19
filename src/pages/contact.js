import React, { useState } from "react"
// import { Link } from "gatsby"
import Heading from '../components/heading'
import Layout from "../components/layout"
import tw, { styled } from "twin.macro"

export default function Contact() {
  let [counter, setCounter] = useState(0)

  const handleAddCount = (e) => {
    e.preventDefault()
    setCounter(counter + 1)
  }

  const handleReduceCount = (e) => {
    e.preventDefault()
    setCounter(counter - 1)
  }

  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Heading headerText="Contact" />
        <p css={tw`text-blue-500`}>Send us a message!</p>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
        <button css={tw`shadow-lg p-2 rounded bg-green-300 mt-4`}>This is button</button>
        <div css={tw`mt-4`}>
          <button
            css={tw`shadow-lg p-2 rounded bg-purple-300 mr-2`}
            onClick={handleReduceCount}>Reduce</button>
          <button
            css={tw`shadow-lg p-2 rounded bg-purple-300 mr-2`}
            onClick={handleAddCount}>Add</button>
          <span>{counter}</span>
        </div>
      </div>
    </Layout>
  )
}