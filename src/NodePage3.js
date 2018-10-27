import React, { Component } from 'react';
import '../public/NodePage.css';

class NodeDevice3 extends Component{
    render() {
        return (
            <div className="Node0">
                <h1><span>Arduino Uno R3</span>의 트렌젝션</h1>

                <div className="NodeContent">
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
                            <td className="txhash">0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c</td>
                            <td className="txto">iPad Pro</td>
                            <td className="txfrom">{this.props.title}</td>
                        </tr>
                        <tr>
                            <td className="txhash">0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c</td>
                            <td className="txto">SAMSUNG GALAXY S8</td>
                            <td className="txfrom">{this.props.title}</td>
                        </tr>
                        <tr>
                            <td className="txhash">0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c</td>
                            <td className="txto">iPhone 6s</td>
                            <td className="txfrom">{this.props.title}</td>
                        </tr>
                        <tr>
                            <td className="txhash">0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c</td>
                            <td className="txto">iPhone 6s</td>
                            <td className="txfrom">{this.props.title}</td>
                        </tr>
                        <tr>
                            <td className="txhash">0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c</td>
                            <td className="txto">iSAMSUNG GALAXY S8</td>
                            <td className="txfrom">{this.props.title}</td>
                        </tr>
                        <tr>
                            <td className="txhash">0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c</td>
                            <td className="txto">iPhone 6s</td>
                            <td className="txfrom">{this.props.title}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default NodeDevice3;