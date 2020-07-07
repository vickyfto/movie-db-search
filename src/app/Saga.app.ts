/**
 * @author: dwi.setiyadi@gmail.com
 */

import { all } from 'redux-saga/effects';
import { Sagas } from 'config';

export default function* reduxSaga() {
  if (Sagas) yield all(Sagas);
}
