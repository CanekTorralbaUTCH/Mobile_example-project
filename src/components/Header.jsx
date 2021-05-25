import React from "react"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="https://www.santillana.com.mx/Theme/sgcore/img/logo-santillana.svg" alt="" />
                </div>
            </React.Fragment>
        );
    }
}

export default Header;