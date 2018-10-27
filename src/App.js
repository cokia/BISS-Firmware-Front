import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Profile';
import Logo from "../public/img/Logo.png";
import './css/App.css';
import Dashboard from "./Dashboard/Dashboard";
import NodeDevice0 from "./NodePage/NodePage0"

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
                  <Route exact path="/NodePage" component={node}/>
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
function node() {
    return(
        <NodeDevice0/>
    );
}
export default App;
