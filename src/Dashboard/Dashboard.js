import React, { Component } from 'react';
import Graph from "./Graph/Graph";
import SensorList from "./Sensor/SensorList";
import DeviceList from "./Device/DeviceList";
import NodeList from "./Node/NodeList";
import TransectionList from "./Transection/TransectionList";


class Dashboard extends Component{
    render() {
        return(
            <div className="Dashboard">
                <h1><span>대시보드</span> DashBoard</h1>
                <Graph />
                <SensorList /> <br/>
                <DeviceList />
                <NodeList />
                <TransectionList />
            </div>
        );
    }
}

export default Dashboard;