import React from 'react';
import NavBar from './components/NavBar' 
import SocialLinks from './components/SocialLinks'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar /> 
        <SocialLinks />
      </header>
    </div>
  );
}

export default App;
