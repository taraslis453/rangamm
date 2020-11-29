import React from 'react'
import {render} from 'lib/test-utils'
import {ModalWindow} from './index'

describe('<Modal/>', () => {
  it('renders properly', () => {
    window.scrollTo = jest.fn()
    const {container} = render(<ModalWindow closeCallback={() => {}}>children</ModalWindow>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
