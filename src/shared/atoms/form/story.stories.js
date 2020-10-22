import React from 'react';
import { Form } from './index';

export default {
    title: 'shared/atoms/Form',
    component: Form,
}

const Template = (args) => <Form {...args} />;
export const Default = Template.bind({});

Default.args = {
    navForm: false
}
