import React, { Component } from 'react'
import Phone from '../../img/icons8-android.png';
import '../../css/DeviceList.css';

const DeviceData = [
    ["1", "SAMSUNG GALAXY S8", "Android"],
    ["2", "iPhone 6s", "iOS"],
    ["3","iPad Pro", "iOS"]
]

const devicedata = DeviceData.map(dd => (<a href={/DevicePage/+dd[0]}><div className="Device"><img src={Phone} alt="Phone" /><p><span>{dd[1]}</span><br/>{dd[2]}</p></div></a>))

class DeviceList extends Component {
    render() {
        return (
            <div className="DeviceList">
                <h2><span>디바이스 목록</span>Device List</h2>
                <div className="box">
                    {devicedata}
                </div>
            </div>
        );
    }
}

export default DeviceList;
