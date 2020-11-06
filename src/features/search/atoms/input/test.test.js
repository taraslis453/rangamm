import React from 'react'
import {render} from '@testing-library/react'
import {Input} from './index'
describe('<FormWrapper/>', () => {
  it('renders properly', () => {
    const {container} = render(<Input placeholder='type text' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
