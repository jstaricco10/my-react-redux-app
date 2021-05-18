import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { Team, Player } from '../../helpers/interfaces';

export default function teamReducer(
  state = initialState.teams,
  action: { type: string; team: Team; player?: Player }
): Team[] {
  switch (action.type) {
    case types.CREATE_TEAM_SUCCESS:
      return [...state, { ...action.team }];
    case types.ADD_PLAYER_TO_TEAM:
      return state.map((team) =>
        team.id === action.team.id ? action.team : team
      );
    default:
      return state;
  }
}
