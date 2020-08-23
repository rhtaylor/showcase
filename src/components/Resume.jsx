import React from 'react' 
import { Component } from 'react'
import '../css/Resume.css'
export default class Resume extends Component{
    render(){
        return(<div className="resume"> 
            <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="randall-taylor-a7609151"><a class="LI-simple-link" href='https://www.linkedin.com/in/randall-taylor-a7609151?trk=profile-badge'>Randall Taylor</a></div>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vRGE2ymWernkx4C5MI1gpkvupdlkmbQYcqi7NT-xGW2f3rMEaHmCd1S-sKcRqwz6qTBZ15iVQzo7847/pub?embedded=true"></iframe>
        </div>)
    }
}