import * as types from './actionTypes';

export function createTeamSuccess(team: {}) {
  return { type: types.CREATE_TEAM_SUCCESS, team };
}

export function addPlayerToTeam(team: {}, player: {}) {
  return { type: types.ADD_PLAYER_TO_TEAM, player, team };
}
