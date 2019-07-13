/**
 * @author: dwi.setiyadi@gmail.com
*/

/*
Startup Examples:

import { ReducerSome } from '../modules/auth/ReducerSome';
const reducers: object = {
  some: ReducerSome,
};
export default reducers;
*/

import { ReducerNowPlayingDashboard } from '../modules/dashboard/ReducerDashboard';

const reducers: object = {
  nowPlaying: ReducerNowPlayingDashboard,
};

export default reducers;
