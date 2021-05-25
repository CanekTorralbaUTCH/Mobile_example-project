import React from 'react';
import Hero from '../../components/Hero';
import Badge from '../../components/Badge';
import "./NewBadge.css"

class NewBadge extends React.Component{

    state = {
        loading : false,
        error: null,
        form:{
            header_picture:"",
            profile_picture:"",
            name:"",
            age:"",
            city:"",
            followers:"",
            likes:"",
            post:""
        }
    }
    render(){
        <React.Fragment>
            <Hero h={"15vh"}></Hero>
            <div className="container">
                <div className="col">
                    <Badge></Badge>
                </div>
                <div className="col"></div>
            </div>
        </React.Fragment>
    }
}

export default NewBadge