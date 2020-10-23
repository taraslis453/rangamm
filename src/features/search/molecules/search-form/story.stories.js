import React from 'react';
import { SearchForm } from './index'

export default {
    title: 'features/search/molecules/SearchForm',
    component: SearchForm,
};

const Template = (args) => <SearchForm {...args} />
export const Default = Template.bind({});
Default.args = {
    navForm: true,
}