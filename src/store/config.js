import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import door from './door';

const reducers = combineReducers({
  door,
});

const configureStore =
  () => createStore(
    reducers,
    composeWithDevTools(),
  );

const configuredStore = configureStore();

export default configuredStore;
