import React, { Component } from 'react';
import Node from './Node';
import '../public/NodeList.css';

const NodeName = [
    "Arduino Uno R3",
    "Arudino Nano",
    "Arduino Mega",
    "raspberry pi 3"
]

const MACaddr = [
    "fe80::c492:59ea:76ad:59cf%8",
    "fe80::c492:59ea:76ad:59cf%8",
    "fe80::c492:59ea:76ad:59cf%8",
    "fe80::c492:59ea:76ad:59cf%8"
]

class NodeList extends Component {
    render() {
        return (
            <div className="NodeList">
                <h2><span>노드 목록</span>Node List</h2>
                <div className="box">
                    <a href="/Node0"><Node title={NodeName[0]} MACaddr={MACaddr[0]}/></a>
                    <a href="/Node1"><Node title={NodeName[1]} MACaddr={MACaddr[1]}/></a>
                    <a href="/Node2"><Node title={NodeName[2]} MACaddr={MACaddr[2]}/></a>
                    <a href="/Node3"><Node title={NodeName[3]} MACaddr={MACaddr[3]}/></a>
                </div>
            </div>
        );
    }
}
export default NodeList;
