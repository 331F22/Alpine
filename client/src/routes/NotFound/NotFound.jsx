import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"

/**
 * Simple component to be displayed when an invalid route is accessed
 * @returns 
 */
const NotFound = () => {
    return (<div className="notFoundContainer">
        <p>Sorry, the requested page could not be found</p>
        <a className="homeLink" onClick={() => { window.history.back() }}>Return to Home Page</a>
    </div>)
}

export default NotFound;