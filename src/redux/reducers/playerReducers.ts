import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function playerReducer(
  state = initialState.players,
  action: { type: string; player: {} }
) {
  switch (action.type) {
    case types.CREATE_PLAYER_SUCCESS:
      return [...state, { ...action.player }];
    default:
      return state;
  }
}
