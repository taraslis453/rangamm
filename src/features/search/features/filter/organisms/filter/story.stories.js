import React from 'react'
import {Filter} from './index'

const filter = {
  title: 'features/search/features/filter/organisms/Filter',
  component: Filter,
}

export default filter

const Template = () => <Filter initialFetch={() => {}} />
export const Default = Template.bind({})
