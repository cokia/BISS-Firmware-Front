import React, { Component } from 'react';
import Arduinoicon from '../../img/icons8-arduino.png';
import '../../css/SensorList.css'

const sensorName= [
    "PM2008 Cubic",
    "DHT-11",
    "Temperature Sensor"
]

const sName = sensorName.map(sn => (<div className="Sensor"><img src={Arduinoicon} alt="Arduino" /><p><span>{sn}</span><br />SENSOR</p></div>))

class SensorList extends Component {
    render() {
        return(
            <div className="SensorList">
                <h2><span>센서 목록</span>Sensor List</h2>

                <div className="box">
                    {sName}
                </div>

            </div>
        );
    }
}

export default SensorList;