import React, { Component } from 'react';
import './SensorList.css'
import Sensor from "./Sensor";

const sensorName= [
    "PM2008 Cubic",
    "DHT-11",
    "Temperature Sensor"

]

class SensorList extends Component {
    render() {
        return(
            <div className="SensorList">
                <h2><span>센서 목록</span>Sensor List</h2>

                <div className="box">
                    <Sensor title={sensorName[0]} />
                    <Sensor title={sensorName[1]} />
                    <Sensor title={sensorName[2]} />
                </div>

            </div>
        );
    }
}

export default SensorList;