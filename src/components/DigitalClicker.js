// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
            let newCount = this.state.count + 1
            this.setState({
                timesClicked: newCount
            })

    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
