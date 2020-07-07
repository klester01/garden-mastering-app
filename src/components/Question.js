import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'
var maxTries = 10
var counter = 0
var submit = 0


export class Question extends Component
{
    answer_question = (is_correct) =>
    {


        if (is_correct === this.props.question.correct_answer)
        {
            alert('Correct!')
            this.props.win();


            //add points to score 
            //run next question
        } else
        {
            alert('Incorrect')
            this.props.lose();
            //run next question

            if (this.props.counter === 9)
            {
                //means this is the 10th attempt 

            }
        }
        //tell function do something else ( do a promise call to add another question)
        return this.props.getQuestion()
    }


    render()
    {
        const newArray = [ ...this.props.question.incorrect_answers, this.props.question.correct_answer ].sort(() => Math.random() - 0.5)

        return (
            <div>


                <div><h2>{this.props.question.category}</h2></div>

                <div><h2>Question: {this.props.question.question}</h2></div>

                {newArray.map(answer =>
                {
                    if (answer === this.props.question.correct_answer)
                    {
                        return (
                            <div><p> <button onClick={() => this.answer_question(answer)}><h2>{answer}</h2></button></p></div>
                        )
                    }
                    return (
                        <div><p> <button onClick={() => this.answer_question(answer)}><h2>{answer}</h2></button></p></div>
                    )
                })}

            </div>

        )
    }
}

const mapStateToProps = (state) =>
{
    return {
        score: state.score,
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        win: () =>
        {
            // we need to dispatch 'YOU_WIN'
            return dispatch({ type: 'YOU_WIN', payload: { points: 100, counter: 1 } });
        },
        lose: () =>
        {
            // we need to dispatch 'YOU_LOSE'
            return dispatch({ type: 'YOU_LOSE', payload: { points: 50, counter: 1 } });

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)


