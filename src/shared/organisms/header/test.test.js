import React from 'react'
import {render} from 'lib/test-utils'
import {Header} from './index'
describe('<Header/>', () => {
  it('renders properly', () => {
    const {container} = render(<Header />)
    // expect(container.firstChild).toMatchSnapshot()
  })
})
