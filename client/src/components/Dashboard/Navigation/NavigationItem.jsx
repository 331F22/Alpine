import { Component, React } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

/**
 * A navigation item which is displayed in the NavigationMenu list
 * @param {Component} icon The icon to be displayed on the list item 
 * @param {string} label The text to be displayed on the list item 
 * @param {string} route The absolute or relative react-router route to be navigated to upon clicking this item
 * @returns 
 */
const NavigationItem = ({icon, label, route}) => {
    return (
        <Link to={route} className="NavigationItemLink">
            <button className="NavigationItemContainer">
                {icon}
                <p className="navigationItemTitle">{label}</p>
            </button>
        </Link>
    )
}

export default NavigationItem;