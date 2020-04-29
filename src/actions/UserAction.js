import { fetchApi } from '../utils/apiCaller';
import { FETCH_USERS_SUCCESS } from '../constants/actions';
import { makeActionCreator } from '../utils';

export const fetchUsersSuccess = makeActionCreator(
  FETCH_USERS_SUCCESS,
  `users`
);

export const actGetUser = () => {
  return async dispatch => {
    return fetchApi('https://jsonplaceholder.typicode.com/users', 'GET').then(
      response => {
        dispatch(fetchUsersSuccess(response));
      },
      error => {
        console.log(error);
      }
    );
  };
};
