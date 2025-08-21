import React from 'react';
import './index.css';
import culturalImage from './assets/culturals.jpeg';
import onamImage from './assets/onam.jpg';
import technicalImage from './assets/technical.jpg';   

function Events() {
    return (
        <div id='events' className='events'>
            <div className="event-card">
                <h2>Cultural Events</h2>
                <img src={culturalImage} alt='Cultural Events' />
            </div>
            <div className="event-card">
                <h2>Onam Events</h2>
                <img src={onamImage} alt='Onam Events' />
            </div>
            <div className="event-card">
                <h2>Technical Events</h2>
                <img src={technicalImage} alt='Technical Events' /> 
            </div>
        </div>
    );
}   
export default Events;