import React, { useState } from "react"
// import { Link } from "gatsby"
import Heading from '../components/heading'
import Layout from "../components/layout"
import tw, { styled } from "twin.macro"

export default function Contact() {
  let [counter, setCounter] = useState(0)
  let [step, setStep] = useState(1)

  const handleAddCount = e => {
    e.preventDefault()
    setCounter(counter + step)
  }

  const handleReduceCount = e => {
    e.preventDefault()
    setCounter(counter - step)
  }

  const handleChange = e => {
    e.preventDefault()
    setStep(parseInt(e.target.value) || '')
  }

  const coloredCounter = counter % 10 === 0 ? tw`text-red-500` : tw`text-blue-500`

  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Heading headerText="Contact" />
        <p css={tw`text-blue-500`}>Send us a message!</p>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
        <button css={tw`shadow-lg p-2 rounded bg-green-300 mt-4`}>This is a useless button</button>
        <h2 css={tw`mt-4 text-4xl`}>Useless Counter</h2>
        <div>
          <p>Total: <span css={[tw`text-2xl font-bold`, coloredCounter]}>{counter}</span></p><br/>
          <button
            css={tw`shadow-lg py-2 px-4 rounded bg-purple-300 mr-2`}
            onClick={handleReduceCount}>-</button>
          <button
            css={tw`shadow-lg py-2 px-4 rounded bg-purple-300 ml-2`}
            onClick={handleAddCount}>+</button>
          <br/><br/>
          <label htmlFor="step">Step (Number only)</label><br/>
          <input type="number" name="step" id="step" value={step} pattern="^-?[0-9]\d*\.?\d*$"
            onChange={handleChange} />
        </div>
      </div>
    </Layout>
  )
}