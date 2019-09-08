import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        this.setState(prevState => ({ count: prevState.count + 1}))
    }

    clearCounter = () => {
        this.setState({count: 0});
    }

    render() {
        return (
            <center data-test="component-counter">
                <h1 data-test="counter-display" >Counter: {this.state.count}</h1>
                <button data-test="increment-button" onClick={this.incrementCounter}>Increment Counter {this.state.count}</button>
                <br/>
                <br/>
                {this.state.count > 0 && (<button onClick={this.clearCounter}>Clear Counter</button>)}
            </center>
        )
    }
}
