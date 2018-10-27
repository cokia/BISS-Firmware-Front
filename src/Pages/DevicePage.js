import React, { Component } from 'react';
import '../css/DeviceList.css';

class DevicePage extends Component{
    render() {
        return (
            <div className="Device">
                <h1><span>Arduino Uno R3</span>의 트렌젝션</h1>
                <div className="DeviceContent">
                    <table>
                        <thead>
                        <tr>
                            <td className="txhash">TX Hash</td>
                            <td className="txto">To</td>
                            <td className="txfrom">From</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="txhash">{this.props.txhash}</td>
                            <td className="txto">{this.props.txto}</td>
                            <td className="txfrom">{this.props.txfrom}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DevicePage;