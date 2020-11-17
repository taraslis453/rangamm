import React from 'react'
import {Background} from './index'

export default {
  title: 'shared/atoms/Background',
  component: Background,
}

const Template = args => <Background {...args} />
export const Default = Template.bind({})
Default.args = {
  url:
    'https://images.unsplash.com/photo-1582322384982-92cf41ed4dbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
}
