import React, { Component } from 'react';
import NodePict from '../../../public/img/icons8-blockchain_technology.png';
import '../../css/Node.css'

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