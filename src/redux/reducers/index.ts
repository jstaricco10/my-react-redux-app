import { combineReducers } from 'redux';
import players from './playerReducers';
import teams from './teamReducers';
const rootReducer = combineReducers({
  players,
  teams,
});

export default rootReducer;
