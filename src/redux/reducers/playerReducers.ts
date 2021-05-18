import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { Player } from '../../helpers/interfaces';

export default function playerReducer(
  state = initialState.playersData,
  action: { type: string; player: Player }
): {} {
  switch (action.type) {
    case types.CREATE_PLAYER_SUCCESS:
      return { ...state, players: [...state.players, action.player] };
    default:
      return state;
  }
}
