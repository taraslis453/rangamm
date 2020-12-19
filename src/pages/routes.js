import {Home} from './home/page'
import {Search} from './search/page'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/search/:paramsQuery',
    exact: true,
    component: Search,
  },
]
