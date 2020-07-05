import React, { Component } from 'react';

class Timer extends Component
{
    constructor(props)//Use constructor when setting defaults values
    {
        super(props)
        this.state = {
            count: 60
        }
    }

    timerStart()
    {
        return
    }


    render()
    {
        const { count } = this.state
        return (
            <div>
<<<<<<< HEAD
                <h1>Time Remaining: {count}: secs </h1>
                <button type="button" onClick={this.timerStart}> Click to Start</button>
=======
                <h1 id='timer'>Time Remaining: {count}: secs </h1>
>>>>>>> master
            </div>
        )
    }
    //Use componentDidMount to control the actions being performed (i.e. add or decrement)
    //use this.setState in the componentDidMount not in Default
    //clear interval
    //set interval 
<<<<<<< HEAD
    /*   componentDidMount()
      {
          this.myInterval = setInterval(() =>
          {
              /* const { startCount } = this.props
              this.setState({
                  count: startCount
              }) */
=======
    componentDidMount()
    {
        this.myInterval = setInterval(() =>
        {
            if (this.state.count <= 0)
            {
                clearInterval(this.myInterval);
                document.getElementById("timer").innerHTML = "Time is up!";
            }

>>>>>>> master

    /*            this.setState(({
                   count: this.state.count - 1
               }))
   
           }, 1000)
       }
       componentWillUnmount()
       {
           clearInterval(this.myInterval)
       }
        */
}

<<<<<<< HEAD
export default Timer;
=======

export default Timer;
>>>>>>> master
