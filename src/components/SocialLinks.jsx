import React, { Component } from 'react' 
import '../css/socialLinks.css'
export default class SocialLinks extends Component{
    render(){
        return(
            <div>
                <div> 
                    <br/> 
                    <a href="https://software-for-humanity.medium.com/" target="_blank"><i className="fab fa-medium"></i></a>
                    <a href="https://www.linkedin.com/in/randallhtaylor/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/rhtaylor" target="_blank"><i className="fab fa-github-square"></i></a>

                </div>
            </div>
        )
    }
}