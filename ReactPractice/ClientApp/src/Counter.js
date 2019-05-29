import React from 'react';

class Counter extends React.Component {

    constructor() {

        super();
        this.state = {
            counter: 0
        };
    }

    IncrementCount = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {

        return (
            <div>
                <h3>{this.state.counter}</h3>
                <button onClick={this.IncrementCount} className='btn btn-primary'>Increment!</button>
            </div>
        )
    }

}

export default Counter;