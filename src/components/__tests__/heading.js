// This is a very brief snapshot test, which uses react-test-renderer to render the component,
// and then generates a snapshot of it on the first run.
// It then compares future snapshots against this, which means you can quickly check for regressions.

import React from 'react'
import renderer from 'react-test-renderer'

import Heading from '../heading'

describe("Heading", () => {
  it("heading renders correctly", () => {
    const tree = renderer
      .create(<Heading headerText="Header Text" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})