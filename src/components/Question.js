import React, { Component } from 'react'

export class Question extends Component
{   
    answer_question(is_correct){
        alert(is_correct);
    }


    render()
    {
        return (
            <div>
                <div><h2>{this.props.question.category}</h2></div>

                <div><h2>Question: {this.props.question.question}</h2></div>

                <div><p>A) <button onClick={this.answer_question(this.props.answers[0].correct)}><h2>{this.props.answers[0].text}</h2></button></p></div>

                <div><p>B) <button onClick="{this.wrong}"><h2>{this.props.answers[ 1 ].correct}</h2></button></p></div>

                <div><p>C) <button onClick="{this.wrong}"><h2>{this.props.answers[ 2 ].correct}</h2></button></p></div>

                <div><p>D) <button ><h2>{this.props.answers[ 3 ]}</h2></button></p></div>
            </div>

        )
    }
}

export default Question


