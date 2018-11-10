import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducer from './reducers'

const logger = ({ getState, dispatch }) => next => action => {
  console.log('Dispatching...', action)
  const returnValue = next(action)
  console.log('After next middleware', returnValue)
  return returnValue
}
// const modifier = store => next => action => {
//   return next({
//     ...action,
//     additionalAttribute: 'Hello?'
//   })
// }

let store = createStore(reducer, applyMiddleware(reduxPromise, reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
