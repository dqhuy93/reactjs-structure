import { createSelector } from 'reselect';

export const usersSelector = createSelector(
  state => state.get(`users`),
  users => users.toJS()
);
