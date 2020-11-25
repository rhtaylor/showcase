import React from 'react'; 
import { Component } from 'react';
import Pre from './Pre'
import Rhtaylor from './Rhtaylor'; 
//import '../css/flash.css'
export default class FlashComponent extends Component{ 
    constructor(props) {
        super(props);
        this.state = { visible: "box", 
            url: '/Rhtaylor',
       }; 
       this.i = 0;  
        
        
    }  
    
    componentDidMount() {
        this.setTimer(); 
       
        } 
     setInter(){ 
        /* function to push urls to display different views based on the delay 
        passed down with props with this.props.delay */ 
         const urls = ['/Rhtaylor', '/Portfolio', '/Resume']
        if(this.i >= 3){  
            clearInterval(this._inter);  
            debugger
            this.props.changeOpacity();
            }
         this.props.history.push(urls[this.i]) 
         ++this.i
        this._inter = setInterval(()=>this.setInter(), this.props.delay)
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
                    <p style={ {"display" : `${this.state.visible}`}}><i><b>WELCOME</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>TO</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>MY PORTFOLIO</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b>SITE</b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b></b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b></b></i></p>
                    <p style={{ "display": `${this.state.visible}` }}><i><b></b></i></p>
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