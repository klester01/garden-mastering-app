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
    render()
    {
        const { count } = this.state
        return (
            <div>
                <h1 id='timer'>Time Remaining: {count}: secs </h1>
            </div>
        )
    }
    //Use componentDidMount to control the actions being performed (i.e. add or decrement)
    //use this.setState in the componentDidMount not in Default
    //clear interval
    //set interval
    componentDidMount()
    {
        this.myInterval = setInterval(() =>
        {
            /* const { startCount } = this.props
            this.setState({
                count: startCount
            }) */
            if (this.state.count < 0)
            {
                clearInterval(this.myInterval);
                document.getElementById("timer").innerHTML = "Time is up!";
            }
            this.setState(({
                count: this.state.count - 1
            }))
        }, 1000)
    }
    componentWillUnmount()
    {
        clearInterval(this.myInterval)
    }
}
export default Timer;