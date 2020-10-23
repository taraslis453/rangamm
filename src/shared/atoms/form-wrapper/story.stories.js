import React from 'react';
import { FormWrapper } from './index';

export default {
    title: 'shared/atoms/FormWrapper',
    component: FormWrapper,
}

const Template = (args) => <FormWrapper {...args} />;
export const Default = Template.bind({});

Default.args = {
    navForm: false
}
