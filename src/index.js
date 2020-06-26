import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Garden from './components/Garden'
import Triva from './components/Trivia'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Garden />
    <Triva />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
