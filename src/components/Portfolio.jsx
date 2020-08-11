import React, { Component } from 'react'

export default class Portfolio extends Component{
    render(){
        return(<div>
            <div> 
            <h1>PatientsHub</h1>
            <a href="https://github.com/rhtaylor/PatientsHubClient">PatientsHub</a>
            <p>React-Redux Front-End Rails-API Back-End application.</p>
            <p>Application designed for Healthcare Providers.</p>
            <p>Allows Providers to Chart on their Patients</p> 
            </div> 
            <div>
            <h1>Boiling Forest</h1> 
            <a href="https://github.com/rhtaylor/tempGradientRailsJsonAPIJS">Boiling Forest</a> 
                <p>Boiling Forest utilizes a third party API openweathermap to pull weather data, process that data, and then calculate the rate of global cooling.</p>
                <p>Boiling Forest is an application designed to track global warming. Greenhouse gas is produced by CO2 from human activities. This causes radiation from the sun to be trapped in the atmosphere. This radiation creates thermal energy or heat. When the sun sets it can no longer heat the earth pointed at it. The earth then starts to cool as the heat radiates out into space. Global Warming is a complex multifaceted phenomenon. One facet is this added layer of greenhouse gas. If this extra greenhouse gas is causing this then over time the rate of cooling will decrease over time.</p>
            </div>
        </div>)
    }
}