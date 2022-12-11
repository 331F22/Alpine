import React from 'react';
import './Home.css';
import AddEntry from '../../components/AddEntry.jsx';
import { useNavigate } from "react-router-dom";


/**
 * The Homepage where volunteers can create a sign-in entry 
 */
function Home() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/dashboard/volunteers")
  }

  return (
    <div className="App">
      <h1>Entries</h1>
      <AddEntry />
      <hr />
      <div className={"loginBtnContainer"}>
        <button className="loginBtn" onClick={navigateToLogin}>Login to Admin Dashboard</button>
      </div>
      <br />
      <hr />
      <footer>
        <i>Tyler Koon, q71j523</i>
        <br />
        My role in the project was to develop the dashboard navigation system and users management table for the admin dashboard:
        <ul>
          <li>src/components/Dashboard/DashboardContainer/DashboardContainer.css - Styling for generic dashboard container component</li>
          <li>src/components/Dashboard/DashboardContainer/DashboardContainer.jsx - A generic container component to encapsulate components on the dashbaord</li>
          <li>src/components/Dashboard/Navigation/Navigation.css - Styling for navigation system</li>
          <li>src/components/Dashboard/Navigation/NavigationItem.jsx - Navigation item to be displayed in the navigation menu</li>
          <li>src/components/Dashboard/Navigation/NavigationMenu.jsx - Navigation menu to display navigation items</li>
          <li>src/components/Dashboard/Volunteers/Volunteers.css - Styling for the volunteers table component</li>
          <li>src/components/Dashboard/Volunteers/Volunteers.jsx - Volunteers table component for interacting with current volunteers (using MUI datagrid)</li>
          <li>src/components/Dashboard/Volunteers/BulkFooter.jsx - A custom footer for the MUI datagrid that supports bulk deletion and sending of vouchers for the Volunteers table</li>
          <li>src/components/routes/Dashboard/Dashboard.css - Styling for the dashboard</li>
          <li>src/components/routes/Dashboard/Dashboard.jsx - The root dashboard component</li>
          <li>src/components/routes/NotFound/NotFound.css - Styling for the 404 not found page</li>
          <li>src/components/routes/NotFound/NotFound.jsx - Page that is displayed if an invalid route is provided to react-router</li>
        </ul>

        <p>The results of these changes can be observed by navigating to /dashboard/volunteers (or clicking the mock 'Login to Admin Dashboard' button above)</p>

        <p>GitHub (note, I have been working on the `group-2-users-manager` branch): </p>
        <a href="https://github.com/331F22/Alpine/tree/group-2-users-manager">https://github.com/331F22/Alpine/tree/group-2-users-manager</a>
      </footer>
    </div>
  )
}

export default Home;

