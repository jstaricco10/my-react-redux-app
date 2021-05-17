import * as types from './actionTypes';
import { Player } from '../../helpers/interfaces';

export function createPlayerSuccess(player: Player) {
  return { type: types.CREATE_PLAYER_SUCCESS, player };
}
