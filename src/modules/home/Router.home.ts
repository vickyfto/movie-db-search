/**
 * @author: dwi.setiyadi@gmail.com
 */

import React from 'react';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/',
    exact: true,
    name: 'Index',
  },
  {
    path: '/home',
    name: 'Home',
    component: React.lazy(() => import('modules/home/pages/Home.page')),
  },
];

export default routes;
