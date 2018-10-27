import React, { Component } from 'react';
import Arduinoicon from './asset/icons8-arduino.png';
import '../public/Sensor.css'

class Sensor extends Component {
    render() {
        return(
            <div className="Sensor">
                <img src={Arduinoicon} alt="Arduino"/>
                <p>
                    <span>{this.props.title}</span> <br />
                    SENSOR
                </p>
            </div>
        );
    }
}

export default Sensor;