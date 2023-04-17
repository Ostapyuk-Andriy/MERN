import React, { Component } from 'react'

const darkMode ={
    backgroundColor: "black",
    color: "white",
    padding: "10px"
}
const lightMode = {
    backgroundColor: "white",
    color: "black",
    padding: "10px"
}
const buttonStyle = {
    width: "100px",
    height: "50px",
    backgroundColor: "orange",
    borderRadius: "50px",
    fontSize: "large"
}

class First extends Component {
    constructor(props){
        super(props)
        this.state ={
            light: true
        }

    }
    render() {
        const {firstName, lastName, favNum, favColor, favGame, children} = this.props
        return (
            <>
                <div style={this.state.light ? lightMode : darkMode}>
                    <h1>First Component</h1>
                    {children}
                    <h3>Full Name:{firstName} {lastName}</h3>
                    <h4>Favorite number: {favNum}</h4>
                    <h4>Favorite color: {favColor}</h4>
                    <h5>Game of choice: {favGame}</h5>
                    <button style={buttonStyle} onClick={()=> this.setState({light: !this.state.light})}>{this.state.light ? "on" : "off"}</button>

                </div>
            </>
        )
    }
}

export default First
