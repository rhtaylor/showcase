import React, { Component } from 'react'
import forest from '../css/forest.jpg'
import portfolio from '../css/portfolio.css' 
import patients_hub from '../css/patients_hub.png'
export default class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio"> 
            <div> 
            <h1>PatientsHub </h1> 
                <span className="span_space"><a href="https://github.com/rhtaylor/PatientsHubClient" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.youtube.com/watch?v=JfEsV0Wla7w&t=3s" target="_blank"><img width="138px" height="80px" src={patients_hub}></img></a>
                </span>
            <p>Application designed for Healthcare Providers to make charting easier</p>
            <p>React-Redux Front-End || Rails-API Back-End application</p>
            <p>Allows Providers to Chart on their Patients</p> 
            </div> 
            <div>
            <div>
            <h1>BoilingForest</h1>
                <span className="span_space"><a href="https://github.com/rhtaylor/tempGradientRailsJsonAPIJS" target="_blank"><i className="fab fa-github"></i></a>
                <a href="_https://www.youtube.com/watch?v=3RqLMTvG2Tk" target="_blank"><img height="80px" src={forest}></img></a>
                </span>
                <p>A proof of Global Warming attributed to green house gas</p>
                <p>Utilizes a third party API openweathermap for real data</p>
                <p>JavaScript Front-End || Ruby on Rails Back-End</p>
                <p>Calculates rate of cooling from afternoon to temp past midnight</p>
            </div>
        </div>
        </div>)
    }
}