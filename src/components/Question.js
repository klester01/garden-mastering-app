import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Question extends Component
{   
    answer_question(is_correct){

        

        if (is_correct === this.props.question.correct_answer){
            alert ('Correct!')
            //add points to score 
            //run next question
        } else {
            alert ('Incorrect')

            //run next question
        }

    }


    render()
    {
        const newArray = [...this.props.question.incorrect_answers, this.props.question.correct_answer].sort(() => Math.random() - 0.5)

        return (
            <div>

                
                <div><h2>{this.props.question.category}</h2></div>

                <div><h2>Question: {this.props.question.question}</h2></div>

                {newArray.map(answer =>{
                if(answer === this.props.question.correct_answer){
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

export default Question;


