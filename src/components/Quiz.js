import React, { Component } from 'react';
import axios from 'axios';

class Quiz extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {}
    }
    componentDidMount()
    {
        axios.get('https://opentdb.com/api.php?amount=1&category=17&type=multiple').then(response =>
        {
            this.setState({ question1: data.results[ 0 ].question })
        })
    }
    render()
    {
        return ('something goes in here')
        //add code here

    }

}
export default Quiz;