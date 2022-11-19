import { useRef } from "react";
import { React, useState } from "react";
import NavigationItem from "./NavigationItem";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import "./Navigation.css"

/**
 * The navigation menu container that displays navigation items and facilitates
 * navigation
 * @param {string} title The text to be displayed at the top of the navigation container 
 * @param {Array<{[key: string]: any}>} routes The routing information used to construct the NavigationItems displayed in the container 
 * @returns 
 */
const NavigationContainer = ({ title, routes }) => {
    const [collapsed, setCollapsed] = useState(true)
    const containerRef = useRef(null)

    // Callback that toggles the 'collapsed' state and updates the width of 
    // the navigation menu as appropriate
    const toggleCollapse = () => {
        // Update 'collapsed' state
        setCollapsed((prev) => !prev);

        // Update the width of the navigation menu to match the 'collapsed'
        // state
        if (collapsed) {
            containerRef.current.style.width = "250px"
        } else {
            containerRef.current.style.width = "60px"
        }
    }

    return (
        <div ref={containerRef} className={"NavigationContainer"}>
            <div className={"navigationTitleContainer"}>
                <p className={"navigationTitle"}>{title}</p>
                <a onClick={toggleCollapse} className={"toggleBtn"}>
                    {collapsed ? <KeyboardArrowRightIcon className={"icon"} /> : <KeyboardArrowLeftIcon className={"icon"} />}
                </a>
            </div>

            {/* Create NavigationItem components for each route */}
            {routes.map(({ icon, label, route }) => {
                return <NavigationItem icon={icon} label={label} route={route} />
            })}
        </div>
    )
}

export default NavigationContainer;