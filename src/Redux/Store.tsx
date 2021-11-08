import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/index';
import { fetchStaff } from './Thunks/FetchUsers';
import { fetchConfigurationCondition } from './Thunks/FetchConditionConfiguration';

export default function Store() {
  const store = createStore(reducers, applyMiddleware(thunk));
  store.dispatch(fetchStaff());
  store.dispatch(fetchConfigurationCondition());
  return store;
}
