import React from 'react';
import './Welcome.css';
import {Redirect} from 'react-router-dom';
// import Garden from './Garden'
// import { Link } from 'react-router';
// import { Switch, Route } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";   



    function game(){
        return  <Redirect  to="./Garden" />
    }


function Welcome() {



    return (
          <div className="Welcome">
            <header className="Welcome-header">
                <div id="content">

                    <h2 className="content-text">Welcome to Science and Nature Trivia App</h2>
                    <h4 className="content-text">Are you ready to test your knowledge?</h4>

                    <div id='username'>
                        <form>
                            <label id='username-input'>Username: </label>
                            <input type='text' id='fname' name='fname'></input>
                            <button onClick={() => <Redirect  to="./Garden" />}>Login</button>
                        </form>
                    </div>

                    <div id='start-game-btn'>

                        <div class="box-1">
                            
                                <div>
                                    <nav>
                                        <Link to="/garden">
                                            Start Game
                                        </Link>
                                    </nav>
                                </div>
                            

                        </div>
                    </div>
                </div>

            </header>
        </div>
                            
    );
}
export default Welcome;

