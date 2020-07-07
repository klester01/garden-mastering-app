import React, { Component } from 'react';
import './Welcome.css';
import Garden from './Garden'
// import { Link } from 'react-router';
// import { Switch, Route } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";   




function Welcome()
{
    return (
          <div className="Welcome">
            <header className="Welcome-header">
                <div id="content">

                    <h2 className="content-text">Welcome to Science and Nature Trivia App</h2>
                    <h4 className="content-text">Are you ready to test your knowledge?</h4>

                    <div id='username'>
                        <form onSubmit>
                            <label id='username-input'>Username: </label>
                            <input type='text' id='fname' name='fname'></input>
                            <input type="submit" id='submit-btn' value="Submit"></input>
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

