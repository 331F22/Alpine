import React from "react";
import PeopleAlt from "@mui/icons-material/PeopleAlt";
import NavigationMenu from "../../components/Dashboard/Navigation/NavigationMenu";
import { Outlet } from "react-router-dom";
import "./Dashboard.css"

/**
 * The root dashboard component which houses the navigation logic
 * @returns 
 */
const Dashboard = () => {
    // Object to define the properties of the NavigationItems displayed in the NavigationMenu
    const routes = []

    return (
        <div className="dashboardContainer">
            {/* Display the navigation menu */}
            <div className="navigation">
                <NavigationMenu title={"BSF Dashboard"} routes={routes}/>
            </div>
            {/* Display the content for the given route */}
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;