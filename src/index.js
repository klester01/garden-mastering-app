import React from 'react';
import ReactDOM from 'react-dom';
import Garden from './Garden';
import './index.css';
// import Usercheck from './components/Usercheck';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Setup a redux store
const initialState = {
  score: 0,
  players: [
    {
      name: 'Test',
      class: 'Mage'
    },
    {
      name: 'Test2',
      class: 'Warrior'
    }
  ],
  inventory: [
    {
      count: 100,
      type: 'potion'
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'YOU_WIN':
      return {
        ...state,
        score: state.score + action.payload.points
      }
    case 'YOU_LOSE':
      return {
        ...state,
        score: state.score - action.payload.points
      }
    default:
      return state;  
  }
}

const store = createStore(reducer);

// Provide that store to the App


ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
    {/* <Usercheck /> */}
    <Provider store={store}>
    <Garden />
    </Provider>
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
