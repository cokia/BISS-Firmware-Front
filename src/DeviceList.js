import React, { Component } from 'react';
import Device from './Device';
import './DeviceList.css';

const DeviceName = [
    "SAMSUNG GALAXY S8",
    "iPhone 6s",
    "iPad Pro"
]

const Deviceos = [
    "Android",
    "iOS"
]

class DeviceList extends Component {
    render() {
        return (
            <div className="DeviceList">
                <h2><span>디바이스 목록</span>Device List</h2>
                <div className="box">
                    <Device title={DeviceName[0]} Category={Deviceos[0]}/>
                    <Device title={DeviceName[1]} Category={Deviceos[1]}/>
                    <Device title={DeviceName[2]} Category={Deviceos[1]}/>
                </div>
            </div>
        );
    }
}
export default DeviceList;
