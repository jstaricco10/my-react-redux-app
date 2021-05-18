import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { Team, Player } from '../../helpers/interfaces';

export default function teamReducer(
  state = initialState.teamsData,
  action: { type: string; team: Team; player?: Player }
): {} {
  switch (action.type) {
    case types.CREATE_TEAM_SUCCESS:
      return { ...state, teams: [...state.teams, action.team] };
    case types.ADD_PLAYER_TO_TEAM:
      return {
        ...state,
        teams: state.teams.map((team) =>
          team.id === action.team.id ? action.team : team
        ),
      };
    case types.DELETE_PLAYER_FROM_TEAM:
      return {
        ...state,
        teams: state.teams.map((team) =>
          team.id === action.team.id ? action.team : team
        ),
      };
    default:
      return state;
  }
}
