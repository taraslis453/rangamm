import React from 'react'
import { P } from './index'

export default {
    title: 'shared/atoms/P',
    component: P,
    argTypes: {
        color: { control: 'color' },
    },
};

const Template = (args) => <P {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, asperiores?</P>;
export const Default = Template.bind({});