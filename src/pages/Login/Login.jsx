import React from 'react';
import './Login.css'
import LoginForm from '../../components/LoginForm';
import Hero from '../../components/Hero';

class Login extends React.Component{
    state = {
        loading : false,
        error: null,
        form:{
            name:"",
            password:"",
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="centered">
                    <h1>Login Page</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src="https://freedesignfile.com/upload/2019/03/Woman-reading-book-in-the-library-Stock-Photo.jpg" alt="login_image" />
                        </div>
                        <div className="col">
                            <LoginForm formValues={this.state.form}></LoginForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login