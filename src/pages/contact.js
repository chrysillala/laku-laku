import React from "react"
// import { Link } from "gatsby"
import Heading from '../components/heading'
import Layout from "../components/layout"
import tw, { styled } from "twin.macro"

export default function Contact() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Heading headerText="Contact" />
        <p css={tw`text-blue-500`}>Send us a message!</p>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
        <button css={tw`shadow-lg ring-4 ring-green-500 p-2 rounded bg-green-300 ring-offset-2`}>This is button</button>
      </div>
    </Layout>
  )
}