import React from 'react';
import BadgeForm from '../../components/BadgeForm';
import Hero from '../../components/Hero';

class SignIn extends React.Component{
    state = {
        loading : false,
        error: null,
        form:{
            name:"",
            age:"",
            city:"",
            password:"",
        }
    }

    render(){
        return(
            <React.Fragment>
            <Hero h={"15vh"}></Hero>
            <div className="centered">
                <div className="row">
                    <h1>New Badge Page</h1>
                </div>
                <div className="row">
                    <BadgeForm 
                    formValues={this.state.form}></BadgeForm>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default SignIn