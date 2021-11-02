import { combineReducers } from 'redux';
import reducer from './reducers';

const reducers = combineReducers({
  data: reducer
});

export default reducers;
