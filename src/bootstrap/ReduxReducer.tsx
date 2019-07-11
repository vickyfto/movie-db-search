/**
 * @author: dwi.setiyadi@gmail.com
*/

import { combineReducers } from 'redux';
import { ReduxReducer as LoadReducers } from '../config';

let reduxReducer: any = combineReducers(LoadReducers);

if (Object.keys(LoadReducers).length === 0 && LoadReducers.constructor === Object) {
  const initialReducer: any = (state: any = [], action: any) => state;
  reduxReducer = combineReducers({ initialReducer } as any);
}

export default reduxReducer;
