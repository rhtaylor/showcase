import React, { Component } from 'react' 
import avatar from '../css/avatar.jpg'
import SocialLinks from './SocialLinks'
export default class Rhtaylor extends Component{
    render(){ 
        
        return(
            <div>
               
                <h1><img height="80px" src={avatar} alt="Randall Taylor"/>Randall Taylor</h1>

                <span><a href="https://medium.com/@software_for_humanity" target="_blank"><i className="fab fa-medium"></i></a>
</span> 
                <p>We all have trials and tribulations. I just see my hardships as a fire to forge myself within harder, stronger, and smarter. I have a science degree from the University of Arizona in Physiology with minors in Biochemistry and Business Administration.  After working within Emergency Medical Services as a 911 response EMT I learned to implement High Reliability Organization and teamwork to achieve the best outcomes for the sick and injured. EMS was the beginning of my nascent professional career.</p>  
                <p>Later I moved into Behavioral Health, worked as a BHT, and Case Manager. I was largely unfulfilled in these roles as they had little opportunity to really make differences in people's lives.</p> 
                <p>A multifacited mix of life experences lead me to want to pursue Software Development. I then taught myself JavaScript from codecademy and really enjoyed functional programming. Two years from the date I decided software was the correct choice and I enrolled in a coding bootcamp. 
                Flatiron taught me the fundamentals of Software Design, debugging, and how to teach myself computer languages professionally. While enrolled I build Two Applications I was extremely proud of: Boiling Forest and PatiensHub. These are detailed on my Projects page. 
</p>
            </div>
        )
    }
} 

