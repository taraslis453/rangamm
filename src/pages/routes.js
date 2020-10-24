import { HomePage } from './home/page';
import { default as SearchPage } from './search/page';

export const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/search/:query',
        exact: true,
        component: SearchPage,
    }
]
