import React from 'react';
import Hero from '../../components/Hero'
import Button from '../../components/MainButton'
import './Main.css'

const Main = (props) =>{
    return(
        <React.Fragment>
        <div className="Main">
            <div className="Main_content">
                <h1 className="Main_title">{props.title || "Wilkommen to the landing zone"}</h1>
                <Button contentText={"New Badge"} link={"/new"}></Button>
                <Button contentText={"Login"} link={"/login"}></Button>
                <Button contentText={"Sign In"} link={"/signin"}></Button>
            </div>
            <Hero h={"88vh"}></Hero>
        </div>
        </React.Fragment>
    );
}

export default Main