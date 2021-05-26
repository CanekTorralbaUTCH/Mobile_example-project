import React from 'react';
import Hero from '../../components/Hero';
import Badge from '../../components/Badge';
import BadgeForm from '../../components/BadgeForm';
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
            pictures:""
        }
    }

    handleChange = event =>{
        this.setState({
            form:{
                ... this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge header_picture={this.state.form.header_picture || "https://gaminguardian.com/wp-content/uploads/2019/01/Uzumaki.jpg"}
                                profile_picture={this.state.form.profile_picture || "https://64.media.tumblr.com/c456c44e8c3868ca28b92606f2854bd7/7399b9f78eebea69-16/s1280x1920/8b9c25c661a8f230407cbcd9fad86e77467b3f9d.png"}
                                name={this.state.form.name || "Canek Torralba"}
                                age={this.state.form.age || "19"}
                                city={this.state.form.city || "Chihuahua City"}
                                followers={this.state.form.followers || "8587"}
                                likes={this.state.form.likes || "9364"}
                                pictures={this.state.form.pictures || "10K"}></Badge>
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