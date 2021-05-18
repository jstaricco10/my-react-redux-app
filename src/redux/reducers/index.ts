import { combineReducers } from 'redux';
import players from './playerReducers';
import teams from './teamReducers';
import { Player, Team } from '../../helpers/interfaces';
const rootReducer = combineReducers<{ players: Player[]; teams: Team[] }>({
  players,
  teams,
});

export default rootReducer;
