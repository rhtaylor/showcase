import React from 'react'; 
import { Component } from 'react';
import Pre from './Pre'
import Rhtaylor from './Rhtaylor'; 
//import '../css/flash.css'
export default class FlashComponent extends Component{ 
    constructor(props) {
        super(props);
        this.state = { visible: "box", 
            url: '/Rhtaylor'
       }; 
       this.i = 0;  
        
        
    }  
    
    componentDidMount() {
        this.setTimer(); 
       
        } 
     setInter(){ 
         if(this.i > 3){ this.i = 0; }
         
        const urls = ['/Rhtaylor', '/Portfolio', '/Resume']
        //this.setState({ url: '/Rhtaylor' }) 
        this.props.history.push(urls[this.i]) 
         ++this.i
        this._inter = setInterval((iArg)=>this.setInter(iArg), this.props.delay * 4)
           
        } 
    setTimer() {
        // hide after `delay` milliseconds  
        this.setInter(); 
        this._timer = setTimeout(function () { 
        this.setState({ visible: "none" });
            this._timer = null;
        }.bind(this), this.props.delay);
    } 
    
    
componentWillUnmount() {
        clearTimeout(this._timer);
    } 

    render(){
        return (<>
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
         
        
                {/* <Pre display={this.state.visible} />
                <Rhtaylor display={this.state.visible} /> */}
        </div> 
        </>
        )
    }
}