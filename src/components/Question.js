import React, { Component } from 'react'

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


