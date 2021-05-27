import React from 'react';
import BadgeForm from '../../components/BadgeForm';
import Hero from '../../components/Hero';

class SignIn extends React.Component{
    state = {
        loading : false,
        error: null,
        form:{
            header_picture:"",
            profile_picture:"",
            name:"",
            age:"",
            city:"",
        }
    }

    render(){
        return(
            <React.Fragment>
            <Hero h={"15vh"}></Hero>
            <div className="container">
                <div className="row-6">
                    <h1>Sign In Page</h1>
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