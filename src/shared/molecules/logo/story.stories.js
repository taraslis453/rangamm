/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {Logo} from './index'
import {createMemoryHistory} from 'history'
import {Router, Route} from 'react-router-dom'
export default {
  title: 'shared/atoms/Logo',
  component: Logo,
  decorators: [
    story => (
      <Router history={createMemoryHistory({initialEntries: ['/']})}>
        <Route path='/' component={() => story()} />
      </Router>
    ),
  ],
}

const Template = () => <Logo />
export const Default = Template.bind({})
