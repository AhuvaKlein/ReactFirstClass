import React from 'react';
import Cars from './Cars';

class Person extends React.Component {

    render() {
        return (<div>
            <h2>{this.props.name} is {this.props.age} years old</h2>
            <Cars make='acura' model='mdx' year={2019} />

        </div>);
    }
}

export default Person;