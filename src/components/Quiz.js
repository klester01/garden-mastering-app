import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question'


class Quiz extends Component
{
  constructor(props)
  {
    super(props);
    this.state = { question: [] }
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
        </div>
      </div>
    );
  }
}

export default Quiz;


// /* import React, { Component } from 'react';
// import axios from 'axios';


// class Quiz extends Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state = { questions1: [] }
//     }; 
//     /*
//     getQuestions = () => {
//         axios.get('https://opentdb.com/api.php?amount=1&category=17&type=multiple').then(function (response) {
//           console.log(response.data.results[0].question);          
//         });

//         // .then(question => {
//         //    // this.setState({
//         //         // questions1: question
//         //         console.log(response.data)
//         //     // });
//         // });
//     }
//     */
//    componentDidMount() {
//     axios.get('https://opentdb.com/api.php?amount=1&category=17&type=multiple')
//     .then(response => {
//       this.setState({ questions1: response.data.results[0] });
//       console.log(response.data)
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }
//   render() {
//     const { questions1 } = this.state;
//     return (
//       <div className="container">
//         <h1>{questions1.question}</h1>
//         <button id="answer1">{questions1.incorrect_answers}</button>
//         <button id="answer2">{questions1.incorrect_answers}</button>
//         <button id="answer3">{questions1.incorrect_answers}</button>
//         <button id="answer1">{questions1.correct_answer}</button>
//       </div>
//     );
//   }
//     /*
//     {
//         axios.get('https://opentdb.com/api.php?amount=1&category=17&type=multiple').then(response =>
//         {
//             this.setState({ question1: question})
//         })
//     }
//     */
//    /* 
//    render() {
//     return (
//       <div className="container">
//           {this.state.questions1.length > 0 && this.state.questions1.map(({question, answers, 
//           correct, questionID}) => <h4>{question}</h4> )}
//       </div>
//     )
//   }
//   */
// }



// export default Quiz;

// /*
// class Quiz extends Component {
//     state = {
//       questionBank: []
//     };
//     getQuestions = () => {
//       quizService().then(question => {
//         this.setState({
//           questionBank: question
//         });
//       });
//     }
//     componentDidMount() {
//       this.getQuestions();
//     }
//       render() {
//         return (
//           <div className="container">
//              <div className="title">Trivia</div>
//               {this.state.questionBank.length > 0 && this.state.questionBank.map(({question, answers, 
//               correct, questionID}) => <h4>{question}</h4> )}
//           </div>
//         )
//       }

//   }
//   */


//   /*
//   class Quiz extends Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state = { questions1: [] }
//     }
//     componentDidMount()
//     {
//         axios.get('https://opentdb.com/api.php?amount=1&category=17&type=multiple').then(response =>
//         {
//             this.setState({ question1: data.results[ 0 ].question })
//         })
//     }
//     render()
//     {
//         return ('something goes in here')
//         //add code here
//     }
// }
// export default Quiz;
// */
