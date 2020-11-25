import React, {Component} from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom' 
import '../css/socialLinks.css' 



export default class NavBar extends Component{
    
    render(){
        return  (
            <div className="NavBar" style={{"opacity": this.props.opacity}}>
            <NavLink
                to="/"
                /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                exact
                /* add styling to Navlink */
                className="link"
                /* add prop for activeStyle */
               
            >Home</NavLink>
            <NavLink
                to="/Rhtaylor"
                exact
                className="link"
                
            >About Author</NavLink>
            <NavLink
                to="/Portfolio"
                exact
                className="link"
               
            >Projects</NavLink> 
                <NavLink
                    to="/Resume"
                    exact
                    className="link"
                    
                >Resume</NavLink> 
        </div>)
    }
}