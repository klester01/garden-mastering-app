import React, { Component } from 'react';
import './Garden.css';
import logo from './components/images/trivia.jpeg';
import Timer from './components/Timer';
import Quiz from './components/Quiz'


class Garden extends Component
{
    render()
    {
        return (
            <div className="Garden">
                <header className="Garden-header">
                    <img src={logo} className="Garden-logo" alt="trivia" />
                    <div id="bungee">
                        <p>Welcome to Science and Nature Trivia App!!</p>
                        <p>Are you ready to test your knowledge?</p>
                        <Quiz />
                        <Timer />
                    </div>
                </header>
            </div>
        );
    }
}

export default Garden;