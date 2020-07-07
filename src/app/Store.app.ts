/**
 * @author: dwi.setiyadi@gmail.com
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { ReduxSaga, ReduxReducer } from 'app';
import { Persistors } from 'config';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

let finalReducers: any = ReduxReducer;
if (Persistors.active) {
  const persistConfig: any = Persistors.storeConfig;
  finalReducers = persistReducer(persistConfig, ReduxReducer);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  sagaMiddleware,

  // place logger middleware for development only
  ...(process.env.NODE_ENV === 'development' ? [logger] : []),
];

const reduxStore = createStore(
  finalReducers,
  composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(ReduxSaga);

export const Persistor: any = persistStore(reduxStore);
export const Store = reduxStore;
