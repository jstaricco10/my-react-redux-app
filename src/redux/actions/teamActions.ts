import * as types from './actionTypes';
import { Team, Player } from '../../helpers/interfaces';

export function createTeamSuccess(team: Team) {
  return { type: types.CREATE_TEAM_SUCCESS, team };
}

export function addPlayerToTeam(team: Team, player: Player) {
  return { type: types.ADD_PLAYER_TO_TEAM, player, team };
}
