import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Leaderboard extends Component {

    render() {
        return (
            <div>
                <h1>Gameboard</h1>
                <span>{this.props.score}</span><br />
                <span>Player 1: {this.props.player[0].name}</span><br />
            </div>
        )
    }
}

// makes this.props.score available for use above
const mapStateToProps = (state) => {
    return {
        score: state.score
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        win: () => {
            // we need to dispatch 'YOU_WIN'
            return dispatch({type: 'YOU_WIN', payload: {points: 100}});
        },
        lose: () => {
            // we need to dispatch 'YOU_LOSE'
            return dispatch({type: 'YOU_LOSE', payload: {points: 50}});

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)
