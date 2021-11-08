import { Home } from '../pages';

const routes = [
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
