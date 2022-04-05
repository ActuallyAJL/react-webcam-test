// This is not my original work, but was created by following the tutorial found here:

// https://itnext.io/accessing-the-webcam-with-javascript-and-react-33cbe92f49cb

// All credit for this app goes to Gökhan İpek , @ https://gokhanipek.medium.com/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
