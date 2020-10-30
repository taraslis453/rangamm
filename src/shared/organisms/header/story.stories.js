import React from 'react'
import { Header } from './index'
import { createMemoryHistory } from 'history'
import { Router, Route } from 'react-router-dom'
export default {
    title: 'shared/organisms/Header',
    component: Header,
    decorators: [(story) => (
        <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
            <Route path='/' component={() => story()} />
        </Router>
    )]
};

const Template = () => <Header />
export const Default = Template.bind({});