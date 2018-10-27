import React, { Component } from 'react';
import Transection from './Transection';

import '../../css/TransecrionList.css';

const txhash = [
    "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c",
    "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c",
    "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c",
    "0xad11e08d123d7b2fd22c0968283981154f32c110aadbb6ff43525138b23ee88c"
]

const tran = txhash.map(th => (<Transection title={th} />));


class TransectionList extends Component {

    render() {
        return (
            <div className="TransectionList">
                <h2><span>트렌젝션 목록</span>Transection List</h2>
                <div className="box">
                    {tran}
                </div>
            </div>
        );
    }
}
export default TransectionList;
