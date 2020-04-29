import { fetchApi } from '../utils/apiCaller';

/************/
export const login = body => {
  return fetchApi('/auth/login', 'POST', body);
};
