import React, { Component } from 'react'
var maxTries = 10
var submit = 0

// while (attempts != correct_answer)
// {
//     var attempts = select_from_multiple_chioce
//     render new question;
// submit++; //added plus 1 to submit (do we need to put in a state?)
// }

// if(attempts = correct_answer)
// {
//     var attempts = select_from_multiple_chioce
//     render new questions
//     submit++;//add plus 1 to submit (do we need to put in a state?)
// }

// if( submit > maxTries)
// {
//     return ("Game Over ")
// }

export class Question extends Component
{
    render()
    {
        return (
            <div>
                <div><h2>{this.props.question.category}</h2></div>

                <div><h2>Question: {this.props.question.question}</h2></div>

                <div><p>A) <button ><h2>{this.props.question.correct_answer}</h2></button></p></div>

                <div><p>B) <button ><h2>{this.props.question.incorrect_answers[ 0 ]}</h2></button></p></div>

                <div><p>C) <button ><h2>{this.props.question.incorrect_answers[ 1 ]}</h2></button></p></div>

                <div><p>D) <button ><h2>{this.props.question.incorrect_answers[ 2 ]}</h2></button></p></div>
            </div>

        )
    }
}

export default Question


