import React, { Component } from 'react';
import axios from 'axios';


class Quiz extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { questions1: [] }
    }; 
    getQuestions = () => {
        axios.get('https://opentdb.com/api.php?amount=1&category=17&type=multiple').then(function (response) {
          console.log(response.data.results[0].question);
        });
        
        // .then(question => {
        //    // this.setState({
        //         // questions1: question
        //         console.log(response.data)
        //     // });
        // });
    }
    componentDidMount() {
        this.getQuestions();
      }


    /*
    {
        axios.get('https://opentdb.com/api.php?amount=1&category=17&type=multiple').then(response =>
        {
            this.setState({ question1: question})
        })
    }
    */
    
   render() {
    return (
      <div className="container">
          {this.state.questions1.length > 0 && this.state.questions1.map(({question, answers, 
          correct, questionID}) => <h4>{question}</h4> )}
      </div>
    )
  }

}


export default Quiz;

/*
class Quiz extends Component {
    state = {
      questionBank: []
    };
    getQuestions = () => {
      quizService().then(question => {
        this.setState({
          questionBank: question
        });
      });
    }
    componentDidMount() {
      this.getQuestions();
    }
      render() {
        return (
          <div className="container">
             <div className="title">Trivia</div>
              {this.state.questionBank.length > 0 && this.state.questionBank.map(({question, answers, 
              correct, questionID}) => <h4>{question}</h4> )}
          </div>
        )
      }
  
  }
  */

  
  /*
  class Quiz extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { questions1: [] }
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
*/
