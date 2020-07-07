/**
 * @author: dwi.setiyadi@gmail.com
 */

import { combineReducers } from 'redux';
import { Reducers, ReducerHooks } from 'config';

let reduxReducer: any = combineReducers(Reducers);

if (Object.keys(Reducers).length === 0 && Reducers.constructor === Object) {
  const initialReducer: any = (state: any = [], action: any) => state;
  reduxReducer = combineReducers({ initialReducer } as any);
}

const hooks: any = (state: any, action: any) => {
  const hook = ReducerHooks(state, action);
  return reduxReducer(hook.state, hook.action);
};

export default hooks;
