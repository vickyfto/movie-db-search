/**
 * @author: dwi.setiyadi@gmail.com
 */

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReduxPersistor, ReduxStore } from 'app';
import { Layout, Loading } from 'components';
import { RouterNonContainer } from 'config';
import 'assets/styles/app.scss';

const App = () => {
  return (
    <Provider store={ReduxStore}>
      <PersistGate loading={Loading} persistor={ReduxPersistor}>
        <HashRouter>
          <React.Suspense fallback={Loading}>
            <Switch>
              {RouterNonContainer.map((route: any, idx: number) =>
                route.component ? (
                  <Route
                    key={idx} // eslint-disable-line
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props: any) => <route.component {...props} />}
                  />
                ) : null
              )}
              <Route path="/" render={(props) => <Layout {...props} />} />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
