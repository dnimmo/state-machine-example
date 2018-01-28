import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import alarm from './room/alarm'
import door from './room/door';

const reducers = combineReducers({
  alarm,
  door,
});

const configureStore =
  () => createStore(
    reducers,
    composeWithDevTools(),
  );

const configuredStore = configureStore();

export default configuredStore;
