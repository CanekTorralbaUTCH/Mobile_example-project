import React from "react"
import { Link } from 'react-router-dom';
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src="https://www.santillana.com.mx/Theme/sgcore/img/logo-santillana.svg" alt="" />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;