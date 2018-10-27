import React, { Component } from'react';
import NodePict from '../../img/icons8-blockchain_technology.png';
import '../../css/NodeList.css';

const Data = [
    ["1", "Arduino Uno R3", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c"],
    ["2", "Arudino Nano", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c"],
    ["3", "Arduino Mega", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c"],
    ["4", "raspberry pi 3", "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c"]
]

const asdf = Data.map(da => (<div className="Node"><img src={NodePict} alt="Node" /><p><a href={/NodePage/ + da[0]}><span>{da[1]}</span> <br /> {da[2].substr(1, 30)}...</a></p></div>));

console.log(asdf)


class NodeList extends Component {
    render() {
        return (
            <div className="NodeList">
                <h2><span>노드 목록</span>Node List</h2>
                <div className="box">
                    {asdf}
                </div>
            </div>
        );
    }
}

export default NodeList;