import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { Player } from '../../helpers/interfaces';

export default function playerReducer(
  state = initialState.players,
  action: { type: string; player: Player }
): Player[] {
  switch (action.type) {
    case types.CREATE_PLAYER_SUCCESS:
      return [...state, { ...action.player }];
    default:
      return state;
  }
}
