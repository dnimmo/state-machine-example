import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import stateBridge from './middleware/stateBridge';
import alarm from './room/alarm'
import door from './room/door';

const reducers = combineReducers({
  alarm,
  door,
});

const configureStore =
  () => createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(stateBridge)
    ),
  );

const configuredStore = configureStore();

export default configuredStore;
