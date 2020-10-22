import React from 'react';
import { SearchForm } from './index'

export default {
    title: 'features/search/molecules/SearchForm',
    component: SearchForm,
    argTypes: {
        color: { control: 'color' },
    },
};

const Template = (args) => <SearchForm {...args} />
export const Default = Template.bind({});
Default.args = {
    navForm: true
}