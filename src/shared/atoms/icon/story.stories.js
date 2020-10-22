import React from 'react';
import { Icon } from './index';

export default {
    title: 'shared/atoms/Icon',
    component: Icon,
}

const Template = (args) => <Icon {...args} />
export const Default = Template.bind({});

Default.args = {
    iconName: 'search'
}