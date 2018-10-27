import React, { Component } from 'react';
import Profile from './Profile';
import './App.css';
import Graph from "./Graph";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
              <Profile />
          </nav>
        </header>
          <div className="content">
              <h1><span>대시보드</span> DashBoard</h1>
              <Graph />
          </div>
      </div>
    );
  }
}

export default App;
