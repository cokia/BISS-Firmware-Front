import React, { Component } from 'react';
import NodePict from './asset/icons8-blockchain_technology.png';
import '../public/Node.css'

class Node extends Component {
    render() {
        return (
            <div className="Node">
                <img src={NodePict} alt="Node"/>
                <p>
                    <span>{this.props.title}</span> <br />
                    {this.props.MACaddr}
                </p>
            </div>
        );
    }
}
export default Node;
