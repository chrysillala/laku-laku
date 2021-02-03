import React from "react"
import Header from '../components/header'
import Layout from "../components/layout"

export default function Custom404() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="404" />
      </div>
    </Layout>
  )
}