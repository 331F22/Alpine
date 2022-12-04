import { React } from "react";
import { Paper } from "@mui/material";
import "./DashboardContainer.css"

/**
 * A simple component that offers a standardized container to present information 
 * throughout the dashboard (creates a nice title bar on the MUI paper component)
 * @param {*} props 
 * @returns 
 */
const DashboardContainer = (props) => {
    return (
        <Paper className="dcContainer">
            {/* Title bar */}
            <div className="dcContainerHeader">
                <h4>{props.title}</h4>
            </div>
            {/* Container content */}
            <div className="dcContainerContent">
                {props.children}
            </div>
        </Paper>
    )
}

export default DashboardContainer