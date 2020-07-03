import React from 'react';
import ReactDOM from 'react-dom';
// import Garden from './Garden';
import './index.css';
//import App from './App';
// import Usercheck from './UserCheck'


//import Timer from './components/Timer'
//import Quiz from './components/Quiz'
import * as serviceWorker from './serviceWorker';
import Usercheck from './components/Usercheck';

ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
    <Usercheck />
    {/* <Garden /> */}
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
