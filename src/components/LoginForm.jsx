import React from "react"
import "./style/LoginForm.css"

class LoginForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="LoginForm m-5">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Username
                            </label>
                            <input 
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={this.props.onChange}
                            value={this.props.formValues.name}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Password
                            </label>
                            <input 
                            type="text"
                            className="form-control"
                            name="password"
                            onChange={this.props.onChange}
                            value={this.props.formValues.password}/>
                        </div>
                        <button type="submit" className="Submit_Button">Enter</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginForm