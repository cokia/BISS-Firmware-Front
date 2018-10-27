import React, { Component } from 'react';
import Picture from './asset/Profile.jpg';
import '../public/Profile.css';


class Profile extends Component {
    render() {
        return (
            <div className="Profile">
            <img src={Picture} alt={"gtg7784"} />
                <p>
                    <span>고태건</span>(gtg7784)
                    <i className="fas fa-caret-down fa-2x" /><br/>
                    용인신릉중학교
                </p>
           </div>
        );
    }
}
export default Profile;
