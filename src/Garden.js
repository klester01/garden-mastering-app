import React from 'react';
import './Garden.css';
// import Timer from './components/Timer';
import Quiz from './components/Quiz'
import ScoreBoard from './components/ScoreBoard';
import Leaderboard from './components/Leaderboard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Garden()
{
    return (
        <div className="Garden">
            <header className="Garden-header">
                {/* <img src={logo} className="Garden-logo" alt="trivia" /> */}
                <div id="bungee">
                    {/* <div><Timer /></div> */}

                    <Quiz />
                    <Leaderboard />
                    <ScoreBoard />

                </div>

            </header>
        </div>
    );
}


      
              


export default Garden;


