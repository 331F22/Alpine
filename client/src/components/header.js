import React from "react";
import "./App/App.css"
import logo from './bsflogo.png'


const Header = () => {
    return(
        <div>
            <div className="bsfheader">
                <img src={logo} className="logo"/>
            </div>
        </div>

    )

}
export default Header