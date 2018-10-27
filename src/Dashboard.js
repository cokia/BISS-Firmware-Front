import React, { Component } from 'react';
import Graph from "./Graph";
import SensorList from "./SensorList";
import DeviceList from "./DeviceList";
import NodeList from "./NodeList";
import TransectionList from "./TransectionList";


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