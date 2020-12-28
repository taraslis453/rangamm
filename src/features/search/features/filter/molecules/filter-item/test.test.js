import React from 'react'
import {render} from 'lib/test-utils'
import {FilterItem} from './index'
describe('<FilterItem/>', () => {
  it('renders properly', () => {
    const {container} = render(
      <FilterItem title='Orientation'>
        <div>Child</div>
      </FilterItem>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
