For the job assignment, we need to set up a database.

The admin page is setup so that we provide them with a react component (JobSheet.jsx). That component will get plugged in as its own tab/page.
For this page, we'll have a title, a table based on the database, and a row connected underneath the table as an option to add row, and a save button at the bottom which then sends the current table to the database.
This is the point the table will get organized by volunteers needed.
Row: Job title, Supervisor, Location, Number of Volunteers

On the AddEntry component in the client, when the user hits submit (or whatever the button is), we need to change it to create a separate screen (DisplayJob.jsx). When initialized, this page will get the current job listing (variable) and display the info from that row.
This page will have a close button at the bottom that increment the row of the current job listing variable and will return the screen to the App.js page.


Port 3306
