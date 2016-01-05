import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import MyComponent from './components/MyComponent';
import { Router, Route, IndexRoute, Link, Redirect } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from './store/createStore';
import { Provider } from 'react-redux';

const history = createBrowserHistory();
const store = configureStore({});

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/subroute" component={MyComponent} />
      </Route>
    </Router>
</Provider>
), document.getElementById('app'));
