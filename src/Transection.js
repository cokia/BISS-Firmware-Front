import React, { Component } from 'react';
import NodePict from './icons8-blockchain_technology.png';
import './Transaction.css'

class Transection extends Component {
    render() {
        return (
            <div className="Transection">
            <img src={NodePict} alt="Node"/>
            <p>
                <span>{this.props.title}</span> <br />
                {this.props.MACaddr}
            </p>
            </div>
        );
    }
}
export default Transection;
