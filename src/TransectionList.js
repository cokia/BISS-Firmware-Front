import React, { Component } from 'react';
import Transection from './Transection';
import './TransecrionList.css';

const NodeName = [
    "Arduino Uno R3",
    "Arudino nano",
    "Arduino mega",
    "raspberry pi 3"
]

const MACaddr = [
    "fe80::c492:59ea:76ad:59cf%8",
    "fe80::c492:59ea:76ad:59cf%8",
    "fe80::c492:59ea:76ad:59cf%8",
    "fe80::c492:59ea:76ad:59cf%8"
]

class TransectionList extends Component {
    render() {
        return (
            <div className="TransectionList">
                <h2><span>트렌젝션 목록</span>Transection List</h2>
                <div className="box">
                    <Transection title={NodeName[0]} MACaddr={MACaddr[0]} />
                    <Transection title={NodeName[1]} MACaddr={MACaddr[2]} />
                    <Transection title={NodeName[2]} MACaddr={MACaddr[2]} />
                    <Transection title={NodeName[3]} MACaddr={MACaddr[3]} />
                </div>
            </div>
        );
    }
}
export default TransectionList;
