import React from 'react';

import { PrivateLayout } from './layout/PrivateLayout';
import { PublicLayout } from './layout/PublicLayout';

const LoginPage = React.lazy(() => import('./pages/login/LoginPage'));
const HomePage = React.lazy(() => import('./pages/home'));

const NotFoundPage = React.lazy(() => import('./pages/not-found/NotFoundPage'));

const routes = [
  {
    path: '/',
    exact: true,
    layout: PrivateLayout,
    main: HomePage,
    isPrivate: true
  },
  {
    path: '/login',
    exact: true,
    layout: PublicLayout,
    main: LoginPage
  },
  {
    path: '',
    layout: PublicLayout,
    main: NotFoundPage
  }
];

export default routes;
