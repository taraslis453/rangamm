import React from 'react'
import {render} from 'lib/test-utils'
import {FilterOption} from './index'
describe('<FilterOption/>', () => {
  it('renders properly', () => {
    const {container} = render(
      <>
        <FilterOption
          name={'order_by'}
          id={`radio-0`}
          label='Relevant'
          value='relevant'
          onChange={() => console.log('onChange')}
          checked={true}
        />
        <FilterOption
          name={'order_by'}
          id={`radio-1`}
          label='Latest'
          value='latest'
          onChange={() => console.log('onChange')}
          checked={false}
        />
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
