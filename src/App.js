import React, { Component } from 'react';
import { Switch, Router } from 'react-router-dom';

import { history } from './utils/history';
import routes from './routes';
import { PrivateRoute, PublicRoute } from './layout';

import './App.scss';

class App extends Component {
  constructor() {
    super();
  }

  showContent = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return route.isPrivate ? (
          <PrivateRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
            layout={route.layout}
          />
        ) : (
          <PublicRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
            layout={route.layout}
          />
        );
      });
    }
    return <Switch> {result} </Switch>;
  };

  render() {
    return <Router history={history}> {this.showContent(routes)} </Router>;
  }
}

export default App;
