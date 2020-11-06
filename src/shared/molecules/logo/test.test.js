import React from 'react'
import {render} from 'lib/test-utils'
import {Logo} from './index'
describe('<Logo/>', () => {
  it('renders properly', () => {
    const {container} = render(<Logo />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
