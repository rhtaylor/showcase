import React from 'react' 
import { Component } from 'react'
import '../css/Resume.css'  
import SoftwareDev from './SoftwareDev'
import avatar from '../css/avatar.jpg'

export default class Resume extends Component{
    render(){
        return(<div className="resume">  
            <h1><img height="80px" src={avatar} alt="Randall Taylor" />Randall Taylor</h1> 
            <p>Phoenix, AZ | 602-999-7756 | <a href="rhtaylorgithub@gmail.com" target="blank">rhtaylorgithub@gmail.com</a></p> 
            <SoftwareDev />
            </div>)
    }
}