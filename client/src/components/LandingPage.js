import React from 'react'
import { Link } from 'react-router-dom';
import LogIn from './LogIn';





const LandingPage = (props) => {
    return (
        <div className="landing-page-container has-text-centered is-size-1">
            <h1>

                <LogIn setCurrentUser={props.setCurrentUser} />
            </h1>
        </div>)
};


export default LandingPage;




