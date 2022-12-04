import React from 'react';
import './Home.css';
import AddEntry from '../../components/AddEntry.jsx';
import CurrentEntries from '../../components/CurrentEntries';

/**
 * The Homepage where volunteers can create a sign-in entry 
 */
function Home() {

  return (
    <div className="App">
      <h1>Entries</h1>
      <AddEntry />

      <br />
      <hr />
      <footer>
        <i>Tyler Koon, q71j523</i>
        My role in the project was to develop the dashboard navigation system and users management table for the admin dashboard:
        <ul>
          <li>src/components/Dashboard/Navigation/Navigation.css - Styling for navigation system</li>
          <li>src/components/Dashboard/Navigation/NavigationItem.jsx - Navigation item to be displayed in the navigation menu</li>
          <li>src/components/Dashboard/Navigation/NavigationMenu.jsx - Navigation menu to display navigation items</li>
          <li>src/components/Dashboard/Users/Users.jsx - user table component for interacting with current volunteers</li>
          <li>src/components/routes/Dashboard/Dashboard.css - Styling for the dashboard</li>
          <li>src/components/routes/Dashboard/Dashboard.jsx - The root dashboard component</li>
          <li>src/components/routes/NotFound/NotFound.css - Styling for the 404 not found page</li>
          <li>src/components/routes/NotFound/NotFound.jsx - Page that is displayed if an invalid route is provided to react-router</li>
        </ul>

        <p>The results of these changes can be observed by navigating to /dashboard</p>

        <p>GitHub (note, I have been working on the `group-2-dashboard-navigation` and `group-2-users-manager` branches): </p>
        <a href="https://github.com/331F22/Alpine/tree/group-2-dashboard-navigation">https://github.com/331F22/Alpine/tree/group-2-dashboard-navigation</a>
      </footer>
    </div>
  )
}

export default Home;

