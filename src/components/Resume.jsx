import React from 'react' 
import { Component } from 'react'
import '../css/Resume.css'  

import avatar from '../css/avatar.jpg'

export default class Resume extends Component{
    render(){
        return(<div className="resume">  
            <h1><img height="80px" src={avatar} alt="Randall Taylor" />Randall Taylor</h1> 
            <p>Phoenix, AZ | 520-822-6568 | rhtaylorgithub@gmail.com</p> 
            <h3>SOFTWARE DEVELOPER</h3>
            <p>Full stack software developer experienced in Ruby on Rails and React. I have passion for creating software for the benefit of humanity; it is the future of the world and through it we can save it.  Possess strong skills in writing software programs, debugging errors, learning new computer languages, and also creativity, emotional intelligence, and being enthusiastic about coding.</p>
            <p>________________________________________________________________________________________________________________________________________________________________________________</p>
            <h3>TECHNICAL SKILLS</h3>
            <p>Ruby, Rails, PostgreSQL, JavaScript, React, Redux, Functional Programming. CSS, HTML, SCSS, MVC, JSON, Sinatra, Bootstrap</p>
            <h3>TECHNICAL PROJECTS</h3>
            <h4>PatientsHub -  Github Front-End | Back-End | Demo</h4>
            <p>An app that allows healthcare providers to virtually chart on their patients.</p>
            <ul><li>Selected Bcrypt for secured password creation/validation/authentication/login.</li>
            <li>Utilized PostgreSQL database to achieve data persistence.</li>
            <li>Wrote React-Redux front-end and Rails back-end allowing seamless dataflow for users.</li>
            <li>Incorporated Rails API for table relationships to organize data based on associations.</li></ul>
            <h4>Boiling Forest - Github Front-End | Back-End| Demo</h4>
            <p>As a proof of Global Warming an application that tracks rate of global cooling after sunset.</p>
            <ul><li>Centralizes real weather stations API data in JSON format to track actual global warming.</li>
            <li>Calculates temperature rate changes of area cooling past sunset over time as a proof of global warming.</li>
            <li>Personalizes the application by enabling users to check for a weather station via city and then add/track it from their database.</li></ul>
            <p>________________________________________________________________________________________________________________________________________________________________________________</p>

             </div>)
    }
}