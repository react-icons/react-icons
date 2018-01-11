import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import expect from 'expect'
import IconBase from '..'

describe('IconBase', () => {
  let outer

  beforeEach(() => {
    const renderer = ReactTestRenderer.create(<IconBase />)
    outer = renderer.toJSON()
  })

  it('renders svg', () => {
    expect(outer.type).toEqual('svg')
  })

  it('has default props', () => {
    expect(outer.props.fill).toEqual('currentColor')
    expect(outer.props.preserveAspectRatio).toEqual('xMidYMid meet')
    expect(outer.props.height).toEqual('1em')
    expect(outer.props.width).toEqual('1em')
    expect(outer.props.style.verticalAlign).toEqual('middle')
  })

  it('has does not have a default color', () => {
    expect(outer.props.style.color).toNotExist()
  })
})
