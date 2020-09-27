import React from 'react'; 
import { Component } from 'react';

export default class FlashComponent extends Component{ 
    constructor(props) {
        super(props);
        this.state = { visible: "box", 
        second: 'none', 
        } 
    }
     
    componentDidMount() {
        this.setTimer();
        this.setSecondTimer(); 
        
    }
 
    setTimer() {
        // hide after `delay` milliseconds
        this._timer = setTimeout(function () {
            this.setState({ visible: "none" });
            this._timer = null;
        }.bind(this), this.props.delay);
    } 
    setSecondTimer(){
        this._timerTwo = setTimeout(function(){
            this.setState({ second: "box" }); 
            this._timerTwo = null; 
        }.bind(this), this.props.delay + 1000);
        console.log(this.state)
    }

    componentWillUnmount() {
        clearTimeout(this._timer);
    } 

    render(){
        return(<>
            <div style={ {"display" : `${this.state.second}` }}>
            <pre>
            <p><i><b>RRRRRRR</b></i></p>
            <p><i><b>RRR    RRR</b></i></p> 
            <p><i><b>RRR     RRRR</b></i></p>
            <p><i><b>RRR   RRR</b></i></p>
            <p><i><b>RRRRRRRR</b></i></p>
            <p><i><b>RRR  RRR</b></i></p>
            <p><i><b>RRR   RRR</b></i></p>
            <p><i><b>RRR    RRR</b></i></p>
            <p><i><b>RRR      RRR</b></i></p> 
            </pre>
        </div>
        <div style={{"display" : "box"}}>
                <pre>
                    <p style={ {"display" : `${this.state.visible}` }}><i><b>WELCOME</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>TO</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>MY PORTFOLIO</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>SITE</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>HOSTED</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>BY</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>GITHUB</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>PLEASE</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>FOLLOW THE LINKS</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>TO EXPLORE MY SKILLS</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>AND ABILITIES</b></i></p>

                </pre>
        </div> 
        </>
        )
    }
}