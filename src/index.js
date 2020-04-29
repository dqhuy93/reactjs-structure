import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// import { DevTools } from './components';
import * as serviceWorker from './serviceWorker';
import './reset.scss';
import './index.scss';
import App from './App';

// const Main = ({ state }) => (
//   <div>
//     <Provider store={state}>
//       <App />
//     </Provider>
//   </div>
// );

ReactDOM.render(
  <div>
    {/* <Main state={store} /> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* <DevTools store={store} /> */}
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
