import React from 'react';
import './Garden.css';
import logo from './images/trivia.jpeg';

function Garden()
{
    return (
        <div className="Garden">
            <header className="Garden-header">
                <img src={logo} className="Garden-logo" alt="trivia" />
                <div id="bungee">
                    <p>Welcome to Science and Nature Trivia App!!</p>
                    <p>Are you ready to test your knowledge?</p>
                </div>
            </header>
        </div>
    );
}
export default Garden;