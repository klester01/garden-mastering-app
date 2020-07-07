import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Leaderboard extends Component {

    render() {
        return (
            <div>
                <span>{this.props.players[0].name}: {this.props.score}</span><br />
            </div>
        )
    }
}

// makes this.props.score available for use above
const mapStateToProps = (state) => {
    return {
        ...state,
        // score: state.score,
        // name: state.players[0].name
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
