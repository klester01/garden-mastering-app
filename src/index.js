import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
// import Garden from './Garden'
import './index.css';
// import Usercheck from './components/Usercheck';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Welcome from './Welcome'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";   

// Setup a redux store
const initialState = {
  counter: 0,
  score: 0,
  players: [
    {
      name: 'Bob',
    }
  ]
}

//need to create a function in the parent component that we can refer to in our child component (this.props.updateScore(payload action))


const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'YOU_WIN':
      return {
        ...state,
        score: state.score + action.payload.points,
        counter: state.counter + action.payload.counter
      }
    case 'YOU_LOSE':
      return {
        ...state,
        score: state.score - action.payload.points,
        counter: state.counter + action.payload.counter
      }
    default:
      return state;  
  }
}

const store = createStore(reducer);

// Provide that store to the App


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router> 
    {/* <Usercheck /> */}
    
    
          <Switch>
              <Route exact path="/garden" component={Garden}/>
              <Route exact path="/" component={Welcome}/>
          </Switch>
    </Router>  

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
