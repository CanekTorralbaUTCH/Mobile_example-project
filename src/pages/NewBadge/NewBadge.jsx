import React from 'react';
import Hero from '../../components/Hero';
import Badge from '../../components/Badge';
import BadgeForm from '../../components/BadgeForm';
import "./NewBadge.css"
import api from '../../libs/api';

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
        }
    }

    handleChange = event =>{
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        this.setState({loading:true, error:null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/")
        } catch(error){
            this.setState({loading:false, error:null})
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="centered">
                    <h1>New Badge Page</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge header_picture={this.state.form.header_picture || "https://i2.wp.com/hipertextual.com/wp-content/uploads/2014/03/windows_xp_bliss-wide.jpg?fit=1920%2C1200&ssl=1"}
                                profile_picture={this.state.form.profile_picture || "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"}
                                name={this.state.form.name || "USER NAME"}
                                age={this.state.form.age || "AGE"}
                                city={this.state.form.city || "Your City"}
                                followers={this.state.form.followers || "0"}
                                likes={this.state.form.likes || "0"}
                                pictures={this.state.form.pictures || "0"}></Badge>
                        </div>
                        <div className="col">
                            <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}></BadgeForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NewBadge