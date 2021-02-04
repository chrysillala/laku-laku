import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '../footer'

describe("Footer", () => {
  it("footer renders correctly", () => {
    const tree = renderer
      .create(<Footer footerText="Footer Text" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})