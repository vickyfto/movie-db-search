/**
 * @author: dwi.setiyadi@gmail.com
 */

import React from 'react';
import * as RouterDom from 'react-router-dom';
import { Container } from 'reactstrap';
import { Loading } from 'components';
import { RouterContainer, DefaultPath } from 'config';
import 'bootstrap/dist/css/bootstrap.min.css';

const DefaultLayout = () => {
  return (
    <div className="app">
      <Container fluid>
        <React.Suspense fallback={Loading}>
          <RouterDom.Switch>
            {RouterContainer.map((route: any, idx: number) =>
              route.component ? (
                <RouterDom.Route
                  key={idx} // eslint-disable-line
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props: any) => <route.component {...props} />}
                />
              ) : null
            )}
            <RouterDom.Redirect from="/" to={DefaultPath} />
          </RouterDom.Switch>
        </React.Suspense>
      </Container>
    </div>
  );
};

export default DefaultLayout;
