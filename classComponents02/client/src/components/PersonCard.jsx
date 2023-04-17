import React, { Component } from 'react'

const buttonStyle = {
    width: "200px",
    height: "50px",
    backgroundColor: "orange",
    borderRadius: "50px",
    fontSize: "large"
}

class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            age: this.props.age
        }
    }
    render() {
        const {firstName, lastName, hairColor} = this.props
        const {age} = this.state
        return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <h3>Age: {age}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <button style={buttonStyle} onClick={() => this.setState({age: age +1})}>Birthday Button for {firstName} {lastName}</button>
        </div>
        )
    }
}
export default Card