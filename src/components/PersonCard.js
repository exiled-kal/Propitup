import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Age: this.props.age
        };
    }
    
    increment = () => {
        this.setState({Age: this.state.Age});
    }
   
    render(){
        const { firstName, lastName, Age, hairColor } = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h3>Age: {this.state.Age}</h3>
                <h3>Hair Color: {hairColor}</h3>
            </div>
        );
    }
}

export default PersonCard;