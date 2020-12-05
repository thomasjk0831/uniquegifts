import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
    <Router>
      <Provider store = {store}>
        <App />
      </Provider>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
