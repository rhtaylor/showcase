import React, { Component } from 'react'; 
// import '../css/flash.css'
export default class Pre extends Component{
    render(){
        return (<div style={{ "display": "box" }}>
            <pre>
            <p style={{ "display": `${this.props.display}` }}><i><b>WELCOME</b></i></p>
            <p style={{ "display": `${this.props.display}` }}><i><b>TO</b></i></p>
            <p style={{ "display": `${this.props.display}` }}><i><b>MY PORTFOLIO</b></i></p>
            <p style={{ "display": `${this.props.display}` }}><i><b>SITE</b></i></p>
            <p style={{ "display": `${this.props.display}` }}><i><b>HOSTED</b></i></p>
            <p style={{ "display": `${this.props.display}` }}><i><b>BY</b></i></p>
            <p style={{ "display": `${this.props.display}` }}><i><b>GITHUB</b></i></p>
            <p style={{ "display": `${this.props.display}` }}><i><b>PLEASE</b></i></p>
            <p style={{ "display": `${this.props.display}` }}><i><b>FOLLOW THE LINKS</b></i></p>
            <p style={{ "display": `${this.props.display}` }}><i><b>TO EXPLORE MY SKILLS</b></i></p>
            <p style={{ "display": `${this.props.display}` }}><i><b>AND ABILITIES</b></i></p>

        </pre>
        </div>
        )
    }
}