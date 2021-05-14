import * as types from './actionTypes';

export function createPlayerSuccess(player: {}) {
  return { type: types.CREATE_PLAYER_SUCCESS, player };
}
