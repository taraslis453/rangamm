
import { HomePage } from './home/page';
import { SearchPage } from './search/page';

export const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/search',
        exact: true,
        component: SearchPage,
    }
]
