import React, { Component } from 'react' 
import avatar from '../css/avatar.jpg'
import SocialLinks from './SocialLinks'
export default class Rhtaylor extends Component{
    render(){ 
        debugger
        return(
            <div>
               
                <h1><img height="80px" src={avatar} alt="Randall Taylor"/>Randall Taylor</h1>

                <span><a href="https://medium.com/@software_for_humanity" target="_blank"><i className="fab fa-medium"></i></a>
</span> 
                <p>Without parental guidance I found comfort in guitar and school. I Graduated from the University of Arizona with a Bachelor of Science in Physiology and minors in Biochemistry and Business Administration.  After working within Emergency Medical Services as an EMT I learned to implement High Reliability Organization and teamwork to achieve the best outcomes for the sick and injured. EMS was the beginning of my nascent professional career.</p>  
                <p>As a young man my father John often talked about how technology was changing the world. Indeed John's business was made largely obsolete by the internet. My father taught himself HTML and showed me the website W3Schools that he learned from. I took this information and then built a working static website. Together we put the site on the internet live. I would update this site on a regular basis and answer emails.  
                Later I moved into Behavioral Health, worked as a BHT, and Case Manager. I was largely unfulfilled and remembered how I taught myself to build static websites.</p> 
                <p>That coupled with the experience of my fathers previous business becoming outdated I decided I wanted to become a Software Developer. Then I taught myself JavaScript from codecademy and really enjoyed functional programming. Two years from the date I decided to become a software developer I enroll in a coding bootcamp. 
                Flatiron taught me the fundamentals of Software Design, debugging, and how to teach myself computer languages professionally. While enrolled I build Two Applications I was extremely proud of: Boiling Forest and PatiensHub. These are detailed on my Portfolio page. 
</p>
            </div>
        )
    }
} 

