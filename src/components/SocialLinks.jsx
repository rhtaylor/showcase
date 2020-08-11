import React, { Component } from 'react' 
import '../css/socialLinks.css'
export default class SocialLinks extends Component{
    render(){
        return(
            <div>
                <div> 
                    <br/>
                    <a href="https://medium.com/@software_for_humanity" target="_blank"><i className="fab fa-medium"></i></a>
                    <a href="https://www.linkedin.com/in/randall-taylor-a7609151/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/rhtaylor" target="_blank"><i className="fab fa-github"></i></a>

                </div>
            </div>
        )
    }
}