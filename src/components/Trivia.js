window.onload = sendAPIRequest
//Send request to API to fetch question

async function sendAPIRequest()
{
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=17&type=multiple');
    console.log(response)
    let data = await response.json()//waiting for promise
    console.log(data)
    useApiData(data)
}

//function that does something with the data from API. Use {display the data in curly brackets}
function useApiData(data)
{
    document.querySelector("#category").innerHTML = `Category: ${data.results[ 0 ].category}`
    document.querySelector("#question1").innerHTML = `Question: ${data.results[ 0 ].question}`
    /* document.querySelector("#question2").innerHTML = `Question: ${data.results[ 1 ].question}`
    document.querySelector("#question3").innerHTML = `Question: ${data.results[ 2 ].question}`
    document.querySelector("#question4").innerHTML = `Question: ${data.results[ 3 ].question}`
    document.querySelector("#question5").innerHTML = `Question: ${data.results[ 4 ].question}` */

    document.querySelector("#answer1").innerHTML = data.results[ 0 ].correct_answer
    document.querySelector("#answer2").innerHTML = data.results[ 0 ].incorrect_answers[ 0 ]
    document.querySelector("#answer3").innerHTML = data.results[ 0 ].incorrect_answers[ 1 ]
    document.querySelector("#answer4").innerHTML = data.results[ 0 ].incorrect_answers[ 2 ]

    /*document.querySelector("#answer5").innerHTML = data.results[ 1 ].correct_answer
    document.querySelector("#answer6").innerHTML = data.results[ 1 ].incorrect_answers[ 0 ]
    document.querySelector("#answer7").innerHTML = data.results[ 1 ].incorrect_answers[ 1 ]
    document.querySelector("#answer8").innerHTML = data.results[ 1 ].incorrect_answers[ 2 ]



    document.querySelector("#answer9").innerHTML = data.results[ 2 ].correct_answer
    document.querySelector("#answer10").innerHTML = data.results[ 2 ].incorrect_answers[ 0 ]
    document.querySelector("#answer11").innerHTML = data.results[ 2 ].incorrect_answers[ 1 ]
    document.querySelector("#answer12").innerHTML = data.results[ 2 ].incorrect_answers[ 2 ]

    document.querySelector("#answer13").innerHTML = data.results[ 3 ].correct_answer
    document.querySelector("#answer14").innerHTML = data.results[ 3 ].incorrect_answers[ 0 ]
    document.querySelector("#answer15").innerHTML = data.results[ 3 ].incorrect_answers[ 1 ]
    document.querySelector("#answer16").innerHTML = data.results[ 3 ].incorrect_answers[ 2 ]

    document.querySelector("#answer17").innerHTML = data.results[ 4 ].correct_answer
    document.querySelector("#answer18").innerHTML = data.results[ 4 ].incorrect_answers[ 0 ]
    document.querySelector("#answer19").innerHTML = data.results[ 4 ].incorrect_answers[ 1 ]
    document.querySelector("#answer20").innerHTML = data.results[ 4 ].incorrect_answers[ 2 ] */


}
//Let the player know if he is correct.
let correctButton = document.querySelector("#answer1")//reprsents the location of the correct answer
correctButton.addEventListener('click', () =>
{
    alert("CORRECT! You are on a roll")
    sendAPIRequest()
})

export default Trivia;
