import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Profile';
import Logo from "./Logo.png";
import './App.css';
import Dashboard from "./Dashboard";
import NodeDevice0 from "./NodePage0"
import NodeDevice1 from "./NodePage1"
import NodeDevice2 from "./NodePage2"
import NodeDevice3 from "./NodePage3"

const NodeName = [
    "Arduino Uno R3",
    "Arudino Nano",
    "Arduino Mega",
    "raspberry pi 3"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <a href="/"><img className="Logo" src={Logo} alt="Logo" /></a>
          <nav>
              <Profile />
          </nav>
        </header>
          <BrowserRouter>
              <div className="content">
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/Node0" component={node0}/>
                  <Route exact path="/Node1" component={node1}/>
                  <Route exact path="/Node2" component={node2}/>
                  <Route exact path="/Node3" component={node3}/>
              </div>
          </BrowserRouter>

      </div>
    );
  }
}

function Home() {
    return(
     <Dashboard/>
    );
}
function node0() {
    return(
        <NodeDevice0 title={NodeName[0]}/>
    );
}

function node1() {
    return(
        <NodeDevice1 title={NodeName[1]}/>
    );
}

function node2() {
    return(
        <NodeDevice2 title={NodeName[2]}/>
    );
}

function node3() {
    return(
        <NodeDevice3 title={NodeName[3]}/>
    );
}

export default App;
