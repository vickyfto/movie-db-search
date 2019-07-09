/**
 * @author: dwi.setiyadi@gmail.com
*/

import { combineReducers } from 'redux';
import { ReduxReducer as LoadReducers } from '../config';

const reduxReducer = () => {
  if (Object.keys(LoadReducers).length === 0 && LoadReducers.constructor === Object) {
    return combineReducers({
      action: null,
    });
  }
  return combineReducers(LoadReducers);
};

export default reduxReducer;
