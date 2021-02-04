import React from "react"
import Heading from '../components/heading'
import Layout from "../components/layout"

export default function Custom404() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Heading headerText="404" />
      </div>
    </Layout>
  )
}