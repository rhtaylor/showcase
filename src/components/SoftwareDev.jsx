import React from 'react';
import { Component } from "react"
import '../css/Resume.css'  
import '../css/resume.scss'
import forest from '../css/forest.jpg'
import forestGif from '../css/littleGif.jpg'
//import portfolio from '../css/portfolio.css' 
const BIO = 'Full Stack Software Engineer experienced in Ruby on Rails, JavaScript, React, Redux, and Python. I have a passion for solving problems and building functional applications. Possess strong skills in programming, development, creativity, emotional intelligence, delivering clean code in a timely manner, design, teamwork, and effective verbal and written communication.'
const SKILL = ["Active Record", "Bootstrap", "CRUD API", "CSS", "ES6", "Github", "HTML", "JavaScript", "Jupyter Notebook", "JQuery", "JSON", "Machine Learning","MVC", "Numpy", "PostgreSQL", "Pandas","Python", "React", "Redux", "REST API",  "Ruby", "Ruby On Rails", "SCSS", "SQL", "SQLite", "Sinatra", "Tensorflow"]
class SoftwareDev extends Component{
        constructor(props){
            super(props)
            this.color_changer = this.color_changer.bind(this)
        }
    color_changer(anArray){
        return anArray.map((e, i) => <span className={ Math.floor(Math.random() * 3) == 0 ? "zero" : i%3 == 1 ? "one" : "two"}>&nbsp;{e}&nbsp;</span>)
    }
    render(){
        return (<div className="resume_2">
        <h3>SOFTWARE ENGINEER</h3>
        <p>{BIO}</p>
        
        <h3>TECHNICAL SKILLS</h3>
        <div id="flex">{this.color_changer(SKILL)}</div> 
        
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
            
        <h3>EXPERIENCE</h3> 
        <h4>Software Developer/Webmaster-Contractor, PetSafeKennels, Phoenix, AZ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.petsafekennels.com/" target="_blank">Pet-Safe-Kennels</a> 01/2021 - present</h4>
            <li>Design full stack web application for business</li>
            <li>Style React frontend UI with SCSS to make page more elegant and professional</li>
            <li>Implement a mobile first design philosophy where UI looks amazing on all viewports</li>
            <li>CD/CI process to design and implement new features</li> 
            <li>Maintain website and hosting issues</li>
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