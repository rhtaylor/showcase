import React, { Component } from 'react';
import NavBar from './components/NavBar' 
import SocialLinks from './components/SocialLinks' 
import FlashComponent from './components/FlashComponent'
import './App.css';

export default class App extends Component { 
  state ={ 
    opacity: 0.1
  }
  changeOpacity=()=>{
    this.setState({opacity: 1})
  }
  componentDidMount() {  

  } 


  render(){ 
    return (
    <div className="App">
      <header className="App-header">
        <NavBar opacity={this.state.opacity}/> 
        <SocialLinks /> 
        <FlashComponent history={this.props.history} delay={7000} changeOpacity={this.changeOpacity}/>
      </header>
    </div>
  );
}

}
