import { createReducer } from '../utils';
import { fromJS } from 'immutable';
import { FETCH_USERS_SUCCESS } from '../constants/actions';

export const users = createReducer(null, {
  [FETCH_USERS_SUCCESS]: (state, action) => {
    const { users } = action;
    return fromJS(users);
  }
});
