import React, { Component } from 'react'
import Garden from '../Garden'
import Welcome from '../Welcome'


export class Usercheck extends Component {
    render() {
        const { LoggedOn } = this.state
        if (LoggedOn) {
                    return <Garden />
        } else 
        {
            return <Welcome />
        }
        
    }
}

export default Usercheck
