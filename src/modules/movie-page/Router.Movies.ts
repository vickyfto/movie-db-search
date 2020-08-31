/**
 * @author: dwi.setiyadi@gmail.com
 */

import React from 'react';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/movie',
    exact: true,
    name: 'Movies',
  },
  {
    path: '/movie',
    name: 'Movie',
    component: React.lazy(() => import('modules/movie-page/Movie.page')),
  },
];

export default routes;
