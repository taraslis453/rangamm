import React from 'react'
import {render} from '@testing-library/react'
import {FormWrapper} from './index'
describe('<FormWrapper/>', () => {
  it('renders properly', () => {
    const {container} = render(<FormWrapper />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
