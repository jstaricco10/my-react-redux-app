import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function teamReducer(
  state = initialState.teams,
  action: { type: string; team: {} }
) {
  switch (action.type) {
    case types.CREATE_TEAM_SUCCESS:
      return [...state, { ...action.team }];
    default:
      return state;
  }
}
