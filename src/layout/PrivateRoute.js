import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_URL, TOKEN_KEY } from '../constants';
import { readCookie } from '../utils/helpers/cookie';

const PrivateRouteMode = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        readCookie(TOKEN_KEY) ? (
          <Layout >
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_URL
            }}
          />
        )
      }
    />
  );
};

export { PrivateRouteMode as PrivateRoute };
