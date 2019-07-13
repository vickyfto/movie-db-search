/**
 * @author: dwi.setiyadi@gmail.com
*/

/*
Startup Examples:

import { watcherModules } from '../modules/some/SagaSome';
export default [
  ...watcherModules,
];
*/

import { watcherNowPlaying } from '../modules/dashboard/SagaDashboard';

export default [
  ...watcherNowPlaying,
];
