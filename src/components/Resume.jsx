import React from 'react' 
import { Component } from 'react'
import '../css/Resume.css'   
import forest from '../css/forest.jpg'
import forestGif from '../css/littleGif.jpg'
//import portfolio from '../css/portfolio.css' 
import SoftwareDev from './SoftwareDev'
import avatar from '../css/avatar.jpg'
import '../css/resume.scss'
export default class Resume extends Component{
    render(){
        return(<div className="resume">  
            <h1><img height="80px" id="avatar" src={avatar} alt="Randall Taylor" />Randall Taylor</h1> 
            <p>Phoenix, AZ | 602-999-7756 | <a href="mailto:rhtaylorgithub@gmail.com" target="_blank">rhtaylorgithub@gmail.com</a></p> 
            <SoftwareDev />
            </div>)
    }
}