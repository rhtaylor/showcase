import React, { Component } from 'react';
import NavBar from './components/NavBar' 
import SocialLinks from './components/SocialLinks' 
import FlashComponent from './components/FlashComponent'
import './App.css';

export default class App extends Component { 
  render(){ 
    return (
    <div className="App">
      <header className="App-header">
        <NavBar /> 
        <SocialLinks /> 
        <FlashComponent delay={7000} />
      </header>
    </div>
  );
}

}
