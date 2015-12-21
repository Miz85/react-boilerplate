import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MyComponent from './components/MyComponent';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="subroute" component={MyComponent} />
    </Route>
  </Router>
), document.getElementById('app'));
