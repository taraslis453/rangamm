import React from 'react'
import {render} from '@testing-library/react'
import {Title} from './index'
describe('<Title/>', () => {
  it('renders properly', () => {
    const {container} = render(<Title color='red'>Title</Title>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
