import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './Redux/Store'

// Promise.all([fetchUser(),fetchConditionConfiguration()]).then((resp) => {
//   console.log(resp[0]);
//  store.dispatch({
//    type: 'ALL_USER_DATA',
//    payload: resp[0]
//  });
//   store.dispatch({
//     type: 'ALL_CONDITION-CONFIGURATIONS',
//     payload: resp[1]
//   });
 
// });
const store = Store()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
