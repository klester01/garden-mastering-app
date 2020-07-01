import React, { Component } from 'react'

export class Question extends Component
{
    render()
    {
        return (
            <div>
                <h2>
                    {this.props.question.category}
                </h2>
                <div>
                    <h2>
                        {this.props.question.question}
                    </h2>
                </div>
            </div>

        )
    }
}

export default Question
