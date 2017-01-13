import { compose, createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';


const middleware = [
  logger()
];

const enhancers = compose(
  applyMiddleware(...middleware),//spread(ES6) your middleware array to applyMiddleware
  window.devtoolsExtention ? window.devtoolsExtention() : f => f
);

// /**
// * CREATE STORE
// */

const store = createStore(      /* takes 3 things reducer,initialState which is empty{},and enhancers*/
  rootReducer,
  {},
  enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

export { store };
