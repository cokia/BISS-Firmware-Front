import React, { Component } from 'react';
import Profile from './Profile';
import Graph from "./Graph";
import Logo from "./Logo.png";
import './App.css';
import SensorList from "./SensorList";
import DeviceList from "./DeviceList";
import NodeList from "./NodeList";
import TransectionList from "./TransectionList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img className="Logo" src={Logo} alt="Logo" />
          <nav>
              <Profile />
          </nav>
        </header>
          <div className="content">
              <h1><span>대시보드</span> DashBoard</h1>
              <Graph />
              <SensorList /> <br/>
              <DeviceList />
              <NodeList />
              <TransectionList />
          </div>
      </div>
    );
  }
}

export default App;
