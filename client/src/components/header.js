import React from "react";
import "./App/App.css"
import logo from './bsflogo.png'
import {Button} from "@mui/material";


const Header = () => {
    return(
        <div>
            <div className="bsfheader">
                <img src={logo} className="logo"/>
                <Button href="/vouchers" sx={{marginLeft: "100px"}}>Admin Dashboard</Button>
            </div>
        </div>

    )

}
export default Header