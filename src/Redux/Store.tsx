import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers/index';
import thunk from 'redux-thunk';
import { fetchStaff } from './Thunks/FetchUsers';
import { fetchConfigurationCondition } from './Thunks/FetchConditionConfiguration';

export default function store() {
    const store = createStore(reducers, applyMiddleware(thunk));
    store.dispatch(fetchStaff());
    store.dispatch(fetchConfigurationCondition());
    return store;
}