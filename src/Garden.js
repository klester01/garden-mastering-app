import React from 'react';
import './Garden.css';
import logo from './components/images/trivia.jpeg';
import Timer from './components/Timer';
import Quiz from './components/Quiz'
import ScoreBoard from './components/ScoreBoard';
import Leaderboard from './components/Leaderboard';



function Garden()
{
    return (
        <div className="Garden">
            <header className="Garden-header">
                <img src={logo} className="Garden-logo" alt="trivia" />
                <div id="bungee">

                    {/* <p>Welcome to Science and Nature Trivia App!!</p>
                    <p>Are you ready to test your knowledge?</p> */}
                    <Leaderboard />
                    <ScoreBoard />
                    <Timer />
                    <Quiz />
 
                </div>

            </header>
        </div>
    );
}


export default Garden;

//api url for 10 questions https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple