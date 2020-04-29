import { fromJS } from 'immutable';

export const getDefaultState = () => {
  const defaultState = {
    users: []
  };

  // return immutable
  return fromJS(defaultState);
};
