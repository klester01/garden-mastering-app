import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question'
import Timer from './Timer';


// nextQuestionHandler= () => {
//   this.setState({

//   })
// }

class Quiz extends Component
{
  constructor(props)
  {
    super(props);
    this.answer = this.answer.bind(this)
    this.state = { question: [] }
  }
  answer = () =>
  {
    alert("Correct!, You Are On A Roll!!");
    // nextQuestionHandler();
  }

  componentDidMount()
  {
    axios.get('https://opentdb.com/api.php?amount=1&category=17&type=multiple')
      .then((response) =>
      {
        this.setState({
          question: response.data.results,
          answers: [
            {
              text: response.data.correct_answer,
              correct: true
            },
            {
              text: response.data.results[ 0 ].incorrect_answers[ 0 ],
              correct: false
            },
            {
              text: response.data.results[ 0 ].incorrect_answers[ 1 ],
              correct: false
            },
            {
              text: response.data.results[ 0 ].incorrect_answers[ 2 ],
              correct: false
            },
          ]
        })
      })
      .catch(error =>
      {
        console.log(error);
      });
  }
  render()
  {

    const qca = this.state.question.map((question, index) =>
    {
      return <Question question={question} answers={question.answers} />
    })

    //const { incorrect_answers } = this.state.question;

    const { incorrect_answers } = this.state.question.map((question) =>
    {      
      return <Question question={question} answers={question.answers} />
    }
    
    )


    return (

      <div>
        <div className="Garden">  {/* // this.results[0].incorrect_answers[0] */}
          {/*  <p>{this.props.question}</p> */}
          <p>{qca}</p>
          <Timer />
          <p>{incorrect_answers}</p>
        </div>
      </div>
    );
  }
}

export default Quiz;

