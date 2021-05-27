import React from 'react';
import Hero from '../../components/Hero'
import './NotFound.css'

const NotFound = (props) =>{
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main_content">
                    <h1 className="Main_title">{props.title || "Page not found"}</h1>
                    <h3 className="Second_title">{props.title || "Return to the main page"}</h3>
                </div>
                <Hero h={"88vh"}></Hero>
            </div>
        </React.Fragment>
    );
}

export default NotFound