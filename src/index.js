import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configuredStore from './store/config';
import App from './App';

ReactDOM.render(
  <Provider store={configuredStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
