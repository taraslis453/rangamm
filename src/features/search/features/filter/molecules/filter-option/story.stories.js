import React from 'react'
import {FilterOption} from './index'

const filterOption = {
  title: 'features/search/features/filter/molecules/FilterOption',
  component: FilterOption,
}

export default filterOption

const Template = () => (
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
  </>
)
export const Default = Template.bind({})
