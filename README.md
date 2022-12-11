# Alpine - Administrative Dashboard and Volunteers Management Table
This branch implements the adminstrative dashboard as well as the refactored updated volunteers table. It has been developed and maintained by Tyler Koon from group #2. The following changes have been made: 

- src/components/Dashboard/DashboardContainer/DashboardContainer.css - Styling for generic dashboard container component
- src/components/Dashboard/DashboardContainer/DashboardContainer.jsx - A generic container component to encapsulate components on the dashbaord
- src/components/Dashboard/Navigation/Navigation.css - Styling for navigation system
- src/components/Dashboard/Navigation/NavigationItem.jsx - Navigation item to be displayed in the navigation menu
- src/components/Dashboard/Navigation/NavigationMenu.jsx - Navigation menu to display navigation items
- src/components/Dashboard/Volunteers/Volunteers.css - Styling for the volunteers table component
- src/components/Dashboard/Volunteers/Volunteers.jsx - Volunteers table component for interacting with current volunteers (using MUI datagrid)
- src/components/Dashboard/Volunteers/BulkFooter.jsx - A custom footer for the MUI datagrid that supports bulk deletion and sending of vouchers for the Volunteers table
- src/components/routes/Dashboard/Dashboard.css - Styling for the dashboard
- src/components/routes/Dashboard/Dashboard.jsx - The root dashboard component
- src/components/routes/NotFound/NotFound.css - Styling for the 404 not found page
- src/components/routes/NotFound/NotFound.jsx - Page that is displayed if an invalid route is provided to react-router
