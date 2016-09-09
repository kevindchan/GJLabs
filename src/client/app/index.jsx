import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Dashboard from './components/Dashboard.jsx';
import Start from './components/Start.jsx';
import Preference from './components/Preference.jsx';
import Results from './components/Results.jsx';
import NotFound from './components/NotFound.jsx';
import auth from './auth/auth.js';

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/start',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} onEnter={requireAuth} />
      <Route path='/start' component={Start} />
      <Route path='/preference' component={Preference} onEnter={requireAuth} />
      <Route path='/results' component={Results} onEnter={requireAuth} />
      <Route path="*" component={NotFound} onEnter={requireAuth} />
    </Route>
  </Router>
), document.getElementById('app'))