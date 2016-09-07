import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Results from './components/Results.jsx';
import NotFound from './components/NotFound.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path='/results' component={Results}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('app'))