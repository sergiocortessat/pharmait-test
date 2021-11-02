import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './Redux/Reducers';
import { fetchUser } from './API/apiCalls';

const store = createStore(reducers);
fetchUser().then((user) => {
  store.dispatch({
    type: 'ALL_USER_DATA',
    payload: user
  });
});
// fetchUser().then((user) => {
//  console.log(user);
// });
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
