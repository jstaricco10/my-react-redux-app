import { combineReducers } from 'redux';
import playersData from './playerReducers';
import teamsData from './teamReducers';
const rootReducer = combineReducers({
  playersData,
  teamsData,
});

export default rootReducer;
