import React, { Component } from 'react';
import '../../css/Transaction.css'

class Transection extends Component {
    render() {
        return (
            <div className="Transection">
            <p>
                <span>{this.props.title}</span>
            </p>
            </div>
        );
    }
}
export default Transection;
