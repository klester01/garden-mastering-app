import React from 'react';
import './Welcome.css';


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
                            <input type="submit" id='submit-btn' value="Submit"></input>
                        </form>
                    </div>
                    <div id='start-game-btn' onclick="window.location.href='./Garden.js';">
                        <div class="box-1">
                            <div class="btn btn-one">
                                <span>Start Game</span>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    );
}
export default Welcome;