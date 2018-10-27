import React, { Component } from 'react';
import Phone from '../../../public/img/icons8-android.png';
import '../../css/Device.css';

class Device extends Component {
    render() {
        return (
            <div className="Device">
                <img src={Phone} alt="Android"/>

                <p>
                    <span>{this.props.title}</span> <br />
                    {this.props.Category}
                </p>
            </div>
        );
    }
}
export default Device;
