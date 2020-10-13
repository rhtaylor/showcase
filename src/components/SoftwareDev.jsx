import { Component } from "react"

import React from 'react'; 
class SoftwareDev extends Component{
    render(){
    return(<div>
        <h3>SOFTWARE DEVELOPER</h3>
        <p>Full stack software developer experienced in Ruby on Rails, JavaScript, and React. I have passion for solving problems and building applications that make the world a better place; I embrace the future with the software and the applications I create. Possess strong skills in writing software programs, debugging errors, learning new computer languages, and also creativity, emotional intelligence, and being enthusiastic about coding.</p>
        <p>________________________________________________________________________________________________________________________________________________________________________________</p>
        <h3>TECHNICAL SKILLS</h3>
        <p> Active Record, Bootstrap, CRUD API, CSS, ES6, Github, HTML, JavaScript, JQuery, JSON, MVC, PostgreSQL, Rails, React, Redux, Rest API,  Ruby, SCSS, SQL, SQLite, Sinatra </p>
        <p>________________________________________________________________________________________________________________________________________________________________________________</p>
        <h3>TECHNICAL PROJECTS</h3>
            <h4>PatientsHub -  Github <a href="https://github.com/rhtaylor/PatientsHubClient" target="_blank">Front-End</a> | <a href="https://github.com/rhtaylor/PatientsHub" target="blank">Back-End</a></h4>
            <p>An app that allows healthcare providers to virtually chart on their patients.</p>
            <ul><li>Selected Bcrypt for secured password creation/validation/authentication/login.</li>
                <li>Utilized PostgreSQL database to achieve data persistence.</li>
                <li>Wrote React-Redux front-end and Rails back-end allowing seamless dataflow for users.</li>
                <li>Incorporated Rails API for table relationships to organize data based on associations.</li></ul>
            <h4>Boiling Forest - Github <a href="https://github.com/rhtaylor/tempGradientRailsJsonAPIJS/tree/master/modules/front" target="blank">Front-End</a> | <a href="https://github.com/rhtaylor/tempGradientRailsJsonAPIJS" target="blank">Back-End</a></h4>
            <p>As a proof of Global Warming an application that tracks rate of global cooling after sunset.</p>
            <ul><li>Centralizes real weather stations API data in JSON format to track actual global warming.</li>
                <li>Calculates temperature rate changes of area cooling past sunset over time as a proof of global warming.</li>
                <li>Personalizes the application by enabling users to check for a weather station via city and then add/track it from their database.</li></ul>
            <p>________________________________________________________________________________________________________________________________________________________________________________</p>


        </div>)
    
} 
 }

export default SoftwareDev