import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import Board from './containers/Board';
import Docs from './components/Docs';
import Data from './components/Data';
import Landing from './components/Landing';
import reducers from './reducers/index';
import NotFoundView from './components/NotFoundView';
import './styles/index.css';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  compose(
    applyMiddleware(thunk),
    ),
);


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  (<Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="/board" component={Board} />
        <Route path="/data" component={Data} />
        <Route path="/docs" component={Docs} />
        <Route path="/gettingStarted" component={Docs} />
        <Route path="*" component={NotFoundView} />
        <Route path="/404" component={NotFoundView} />
      </Route>
    </Router>
  </Provider>),
  document.getElementById('root'),
);
