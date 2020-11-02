import React from 'react';
import { SearchForm } from './index'

export default {
    title: 'features/search/molecules/SearchForm',
    component: SearchForm,
};

const Template = (args) => <SearchForm {...args} />
export const Primary = Template.bind({});
export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary'
}