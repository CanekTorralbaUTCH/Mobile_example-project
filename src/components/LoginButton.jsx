import React from 'react';
import { Link } from 'react-router-dom';
import './style/LoginButton.css'

const LoginButton = props => {
    return(
        <React.Fragment>
            <Link className="LoginButton" to={props.link}>
                <p>{props.contentText}</p>
            </Link>
        </React.Fragment>
    )
}

export default LoginButton