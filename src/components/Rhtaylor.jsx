import React, { Component } from 'react' 
import avatar from '../css/avatar.jpg' 
import '../css/styling.scss'
import SocialLinks from './SocialLinks'
export default class Rhtaylor extends Component{
    render(){ 
        
        return(
            <div>
               
                <h1><img height="80px" src={avatar} id="avatar" alt="Randall Taylor"/>Randall Taylor</h1>

                <span><a href="https://software-for-humanity.medium.com/" target="_blank"><i className="fab fa-medium"></i></a>
</span> 
                
                <p>I have a Science degree from the University of Arizona in Physiology with minors in Biochemistry and Business Administration.</p>
                <p>While working within Emergency Medical Services as a 911 response EMT I learned to implement High Reliability Organization and teamwork to achieve the best outcomes for the sick and injured.</p>
                
                <p>Later I moved into Behavioral Health Care, worked as a Behavior Health Tech, and Case Manager.</p> 
                <p>A multifacited mix of life experences lead me to Software Engineering. I then taught myself JavaScript from codecademy and really enjoyed functional programming. Two years from the date I decided on software I enrolled in the software engineering boot camp. 
                Flatiron taught me the fundamentals of Software Design, debugging, and how to teach myself computer languages professionally. While enrolled I build many Applications, two of which I was extremely proud of: Boiling Forest and PatiensHub. These are detailed on my Projects page.</p>
                <p>Currently I am studying Artificial intelligence and Machine Learning at the University of Texas</p>
            </div>
        )
    }
} 

