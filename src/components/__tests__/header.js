import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../header'

describe("Header", () => {
  it("header renders correctly", () => {
    const tree = renderer
      .create(<Header metaTitle="This is meta title" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})