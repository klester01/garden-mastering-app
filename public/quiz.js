window.onload = sendAPIRequest
//import something
async function sendAPIRequest()
{
  let response = await fetch('https://opentdb.com/api.php?amount=1&category=17&type=multiple');
  console.log(response)
  let data = await response.json()//waiting for promise

  useApiData(data)
}
//function that does something with the data from API. Use {display the data in curly brackets}
function useApiData(data)
{
  document.querySelector("#category").innerHTML = `Category: ${data.results[ 0 ].category}`
  document.querySelector("#question1").innerHTML = `Question: ${data.results[ 0 ].question}`
  document.querySelector("#answer1").innerHTML = data.results[ 0 ].correct_answer
  document.querySelector("#answer2").innerHTML = data.results[ 0 ].incorrect_answers[ 0 ]
  document.querySelector("#answer3").innerHTML = data.results[ 0 ].incorrect_answers[ 1 ]
  document.querySelector("#answer4").innerHTML = data.results[ 0 ].incorrect_answers[ 2 ]

  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');

  /* nextQuestion();

  $('#next').click(function () {
    chooseOption();
    if (isNaN(selectOptions[quesCounter])) {
      alert('Please select an option !');
    }
    else {
      quesCounter++;
      nextQuestion();
    }
  });

  $('#prev').click(function () {
    chooseOption();
    quesCounter--;
    nextQuestion();
  }); */
  //Displaying questions
  /* function createElement(index)
  {
    var element = $('<div>', { id: 'question' });
    var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
    element.append(header);

    var question = $('<p>').append(allQuestions[ index ].question);
    element.append(question);

    var radio = radioButtons(index);
    element.append(radio);

    return element;
  }

  function radioButtons(index)
  {
    var radioItems = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < allQuestions[ index ].options.length; i++)
    {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += allQuestions[ index ].options[ i ];
      item.append(input);
      radioItems.append(item);
    }
    return radioItems;
  }

  function chooseOption()
  {
    selectOptions[ quesCounter ] = +$('input[name="answer"]:checked').val();
  }

  function nextQuestion()
  {
    quizSpace.fadeOut(function ()
    {
      $('#question').remove();
      if (quesCounter < allQuestions.length)
      {
        var nextQuestion = createElement(quesCounter);
        quizSpace.append(nextQuestion).fadeIn();
        if (!(isNaN(selectOptions[ quesCounter ])))
        {
          $('input[value=' + selectOptions[ quesCounter ] + ']').prop('checked', true);
        }
        if (quesCounter === 1)
        {
          $('#prev').show();
        }
        else if (quesCounter === 0)
        {
          $('#prev').hide();
          $('#next').show();
        }
      }
      else
      {
        var scoreRslt = displayResult();
        quizSpace.append(scoreRslt).fadeIn();
        $('#next').hide();
        $('#prev').hide();
      }
    });
  }

  function displayResult()
  {
    var score = $('<p>', { id: 'question' });
    var correct = 0;
    for (var i = 0; i < selectOptions.length; i++)
    {
      if (selectOptions[ i ] === allQuestions[ i ].answer)
      {
        correct++;
      }
    }
    score.append('You scored ' + correct + ' out of ' + allQuestions.length);
    return score;
  } */

}
let correctButton = document.getElementById("answer1")//reprsents the location of the correct answer
correctButton.addEventListener('click', () =>
{
  alert("CORRECT! You are on a roll")
  sendAPIRequest()
})
