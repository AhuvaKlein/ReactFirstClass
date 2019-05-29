import React from 'react';
import Counter from './Counter';

class Cars extends React.Component {
    render() {
        let styles = {
            marginLeft: 60,
            color: 'blue'
        }
        return (
            <div style={styles} >
                <h4>make: {this.props.make}, model: {this.props.model}, year: {this.props.year}</h4>
                <Counter />
            </ div>

           
        )
    };
}

export default Cars;