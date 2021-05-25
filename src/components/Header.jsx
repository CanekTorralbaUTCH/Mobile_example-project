import React from "react"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="https://i1.wp.com/www.utch.edu.mx/wp-content/uploads/2018/08/utch-h.png?ssl=1" alt="" />
                </div>
            </React.Fragment>
        );
    }
}

export default Header;