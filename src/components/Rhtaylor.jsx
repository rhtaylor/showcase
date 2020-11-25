import React, { Component } from 'react' 
import avatar from '../css/avatar.jpg' 
import '../css/styling.scss'
import SocialLinks from './SocialLinks'
export default class Rhtaylor extends Component{
    render(){ 
        
        return(
            <div>
               
                <h1><img height="80px" src={avatar} alt="Randall Taylor"/>Randall Taylor</h1>

                <span><a href="https://software-for-humanity.medium.com/" target="_blank"><i className="fab fa-medium"></i></a>
</span> 
                <p>We all have trials and tribulations. I saw my hardships as an opportunity to grow stronger and smarter; the Chinese word for disaster is the same as opportunity.</p>
                <p>I have a Science degree from the University of Arizona in Physiology with minors in Biochemistry and Business Administration.</p>
                <p>There I took Vector Calculus and loved my tests allowed me to problem solve the answers instead of memorize the solution.</p>
                <p>I see parallels in software and coding now.</p>
                <p>After working within Emergency Medical Services as a 911 response EMT I learned to implement High Reliability Organization and teamwork to achieve the best outcomes for the sick and injured.</p>
                <p>EMS was the beginning of my nascent professional career.</p>  
                <p>Later I moved into Behavioral Health, worked as a BHT, and Case Manager.</p> 
                <p>A multifacited mix of life experences lead me to want to pursue Software Engineer. I then taught myself JavaScript from codecademy and really enjoyed functional programming. Two years from the date I decided software was the place I belonged and I enrolled in the software bootcamp. 
                Flatiron taught me the fundamentals of Software Design, debugging, and how to teach myself computer languages professionally. While enrolled I build Two Applications I was extremely proud of: Boiling Forest and PatiensHub. These are detailed on my Projects page. 
</p>
            </div>
        )
    }
} 

