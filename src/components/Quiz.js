import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question'


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
          question: response.data.results
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
      return <Question question={question} />
    })

    //const { incorrect_answers } = this.state.question;

    const { incorrect_answers } = this.state.question.map((question) =>
    {
      return <Question question={question} />
    })


    return (

      <div>
        <div className="Garden">  {/* // this.results[0].incorrect_answers[0] */}
          {/*  <p>{this.props.question}</p> */}
          <p>{qca}</p>
          <p>{incorrect_answers}</p>
          <button onClick={this.nextQuestionHandler}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Quiz;

