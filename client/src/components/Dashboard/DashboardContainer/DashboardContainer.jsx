import { React } from "react";
import { Paper } from "@mui/material";
import "./DashboardContainer.css"

const DashboardContainer = (props) => {
    return (
        <Paper className="dcContainer">
            <div className="dcContainerHeader">
                <h4>{props.title}</h4>
            </div>
            <div className="dcContainerContent">
                {props.children}
            </div>
        </Paper>
    )
}

export default DashboardContainer