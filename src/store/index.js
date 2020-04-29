import { createStore, applyMiddleware } from 'redux'; //compose
import thunk from 'redux-thunk';
// import { DevTools } from '../components';
import rootReducer from '../reducers';
// import { createLogger } from 'redux-logger';
import { getDefaultState } from './getDefaultState';
// const logger = createLogger({
//   stateTransformer: state => state.toJS()
// });

// const enhancer = compose(
//   // applyMiddleware(thunk, logger),
//   applyMiddleware(thunk)

//   // DevTools.instrument()
// );
const defaultState = getDefaultState();
const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;
