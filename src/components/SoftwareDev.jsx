import { Component } from "react"
import '../css/Resume.css' 
import forest from '../css/forest.jpg'
import forestGif from '../css/littleGif.jpg'
//import portfolio from '../css/portfolio.css'
import React from 'react'; 
class SoftwareDev extends Component{
    render(){
    return(<div>
        <h3>SOFTWARE ENGINEER</h3>
        <p>Full stack software engineer experienced in Ruby on Rails, JavaScript, React, and Redux. Previous employment in EMS and behavioral health with a new focus on writing stellar software programs. I have passion for solving problems and building functional applications. Possess strong skills in learning new computer languages, creativity, emotional intelligence, delivering clean code in a timely manner, and effective communication.  
</p>
        <p>________________________________________________________________________________________________________________________________________________________________________________</p>
        <h3>TECHNICAL SKILLS</h3>
        <p> Active Record, Bootstrap, CRUD API, CSS, ES6, Github, HTML, JavaScript, JQuery, JSON, MVC, PostgreSQL, React, Redux, Rest API,  Ruby, Ruby On Rails, SCSS, SQL, SQLite, Sinatra </p>
        <p>________________________________________________________________________________________________________________________________________________________________________________</p>
        <h3>TECHNICAL PROJECTS</h3>
            <h4>PatientsHub -  Github <a href="https://github.com/rhtaylor/PatientsHubClient" target="_blank">Front-End</a> | <a href="https://github.com/rhtaylor/PatientsHub" target="_blank">Back-End</a></h4>
            <p>An app that allows healthcare providers to virtually chart on their patients.</p>
            <ul><li>Selected Bcrypt for secured password creation/validation/authentication/login.</li>
                <li>Utilized PostgreSQL database to achieve data persistence.</li>
                <li>Wrote React-Redux front-end and Rails back-end allowing seamless dataflow for users.</li>
                <li>Incorporated Rails API for table relationships to organize data based on associations.</li></ul>
            <h4>Boiling Forest - Github <a href="https://github.com/rhtaylor/tempGradientRailsJsonAPIJS/tree/master/modules/front" target="_blank">Front-End</a> | <a href="https://github.com/rhtaylor/tempGradientRailsJsonAPIJS" target="_blank">Back-End</a></h4>
        <a href="_https://www.youtube.com/watch?v=3RqLMTvG2Tk" target="_blank"><img height="80px" src={forest}></img></a>
        <a href="https://boiling-forest-global-warming.herokuapp.com/" target="_blank"><img height="80px" src={forestGif}></img></a>

            <p>As a proof of Global Warming an application that tracks rate of global cooling after sunset.</p>
            <ul><li>Centralizes real weather stations API data in JSON format to track actual global warming.</li>
                <li>Calculates temperature rate changes of area cooling past sunset over time as a proof of global warming.</li>
                <li>Personalizes the application by enabling users to check for a weather station via city and then add/track it from their database.</li></ul>
            <p>________________________________________________________________________________________________________________________________________________________________________________</p>
        <h3>EXPERIENCE</h3>
        <h4>Jr. Software Engineer  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://nourimeals.com/" target="_blank">Nouri, Inc</a> 08/2020 - present</h4> 
            <li>Under mentorship of senior Software Engineer and Team Lead Software Engineer follow instructions for creating React UI</li> 
            <li>Style UI with SCSS to make page more elegant and professional</li>
            <li>Implement a mobile first design philosophy where UI looks amazing on all viewports</li> 
        <h4>Behavioral Health Tech  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://quailrunbehavioral.com/" target="_blank">Quail Run</a> 10/2018 - present</h4>
        <li>Ensure health and safety of Adolescent Patients</li>
        <li>Respond to patients in crisis tailored to specific needs to a calm state</li>
        <li>Teach classes on mental health to increase patients knowledge and awareness on maintaining their own mental health</li>

        </div>)
    
} 
 }

export default SoftwareDev