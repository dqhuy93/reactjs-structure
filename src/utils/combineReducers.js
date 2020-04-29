import { isBoolean } from 'lodash';
export const combineReducers = config => {
  return (state, action) => {
    return Object.keys(config).reduce((state, key) => {
      const reducer = config[key];

      // lấy ra state hiện tại
      const previousState = state.get(key);

      // gọi hàm reducer
      const newValue = reducer(previousState, action);
      if (!isBoolean(newValue) && !newValue) {
        throw new Error(
          `A reducer returned undefined when reducing key::"${key}"`
        );
      }
      return state.set(key, newValue);
    }, state);
  };
};
