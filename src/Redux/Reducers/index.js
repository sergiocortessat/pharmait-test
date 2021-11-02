import { combineReducers } from 'redux';
import Condition from './reducers';

const reducers = combineReducers({
  condition: Condition
});

export default reducers;
