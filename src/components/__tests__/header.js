// This is a very brief snapshot test, which uses react-test-renderer to render the component,
// and then generates a snapshot of it on the first run.
// It then compares future snapshots against this, which means you can quickly check for regressions.

import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../header'

describe("Header", () => {
  it("header renders correctly", () => {
    const tree = renderer
      .create(<Header headerText="Header Text" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})