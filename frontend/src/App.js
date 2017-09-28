import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import 'whatwg-fetch'; // only have to import this once globally

import NavBar from './components/nav/NavBar';
import RouteSidebar from './components/nav/RouteSidebar';

import routes from './Routes';

export default class App extends Component {
  render() {
      return (
          <div id="app">
              <NavBar/>
              <RouteSidebar/>
              <div className="row right_col" role="main">
                  {routes.map(route => (
                      <Route
                          key={route.path}
                          component={route.component}
                          path={route.path}
                          exact={route.exact}
                      />
                  ))}
              </div>
          </div>
      );
  }
}
