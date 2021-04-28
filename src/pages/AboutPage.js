import React from 'react';

import about from '../styles/about.scss'

import ContactInfoComponent from '../components/common/ContactInfoComponent'

const AboutPage = (props) => {
    return (
        <div className={`about`}>
            <div className={`description`}>
                <h1>Wind Speed Predictions in Dinghy Sailing</h1>

                <h2>Goal</h2>
                <p>The goal of the project is to create a prototype Machine Learning model that will predict the mean wind speed in Lelystad. 
                    A subgoal for this project is to make the Machine Learning model accessible to the public through a web application.</p>

                <h2>Motivation</h2>
                <p>As a sailor during many races I have found myself frustrated and let down by the wind forecasts. I see this as an opportunity to “innovate” in this field or at least try. <br/>
                    I whole heartedly believe that true innovation is primarily fuelled by someone’s passion in the topic, the greater someone’s passion for a given topic the harder they will try to make something great and useful.</p>
            </div>
            
            <ContactInfoComponent />
        </div>
    );
}

export default AboutPage;