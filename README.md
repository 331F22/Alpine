### Alpine BSF Volunteer Tracker I

# Blacklisting/Whitelisting Volunteers
Description:<br> 
&emsp;Group 5, delegated to presenting a blacklist/whitelist system to properly ban or permit volunteers to the foundation through the platform. BSF foundation works as a ski foundation and has many volunteers, the following page that group 5 is developing will bring more quality of life progress to the safety of the foundation.

- Ali Khaef, Front-End Developer: User-Interface and View Builder
    - Site Link: [Ali's Link to Site](http://csci331.cs.montana.edu:3010/)
- Kelby Abel, Back-End Developer: Javascript/ Interaction Builder
    - Site Link: [Kelby's Link to Site](http://csci331.cs.montana.edu:3073/)
- Jace Zavarelli, Back-End Developer: Database Interaction Builder/ Writer and Archivist
    - Site Link: [Jace's Link to Site](http://csci331.cs.montana.edu:3046/)

Running Server System: 
``` 
forever start -c "npm start" ./ 
```

Running Client Sytem:
```
forever start
```

Presentation Link: [Group 5 Presentation](https://montanaedu-my.sharepoint.com/:p:/g/personal/n76t836_msu_montana_edu/EXnP-EaggBxCm5c9ba41PQEBSQJCCufEI_R-_LILFCBotw?e=fmNRHe)

## Creative Objectives
Description:<br> 
&emsp;Group 5 wished to create a means to sort through the accepted volunteers within the platform, and to create a whitelisting/blacklisting system that will provide further safety to physical members of the foundation. Blacklisting certain members, banning individuals, is a way to regulate the safety of people in the foundation and would help to regulate members who could be a danger to others. The whitelist/blacklist system will delegate everyone to the whitelist category, and when someone recieves enough complaints the admin can easily blacklist, with proper reason, when it is needed at the foundation.

## Tech Summary
Description:<br> 
&emsp;A summary of the tools, libraries, software, and items used to create the project are present within the Tech Summary. The following will be cumulative of everything the team has used to develop the project as a whole.

- **React & Express**: This is the primary tool that is used within the project, which means we will utilize React and Express together to make all our other components combine. The react components will use JSX files that will link different functions on our feature page. The feature will show a view of the DB which will utilize components in Express to give us a correct output, however the server does not link easily to the clients view and JSX files providing some minor issues. The Express system will do basic SQL queries and function delivery that will provide an open-ended functionality of our banning page that edits and modifies the DB that is used by Group 5.
- **Bootstrap**: Bootstrap acts as a minor component in the development of our feature. Bootstrap will be utilized to format the tables in our view, and is used for a generalized formatation process. If the project were to merge with another groups then we will have the CSS and Bootstrap easily modifiable for the needs of the merged groups. A CSS file in our feature does override some function of the total projects Bootstrap systems.
- **Javascript**: The Javascript in the project works along with the JSX files in order to build our system with multiple functions. However, the Javascript will also server as the calling and button connection system needed within the group feature. The Javascript is more featured through with the connection and the development of the server system that will be used amongst the different files. 

## Individual Notes
Description:<br>
&emsp;The delegated and described task, as of, by each member within Group 5. Each member of Group 5 has given different contributions and notes on the work accomplished within the project. Notes can consist of problems, risk, developments, tools, and much more that is assessed within the greater project.

- Ali
    - Personal Work:
    - A
    - B


- Kelby
    - Personal Work:
    - A
    - B


- Jace
    - Personal Work: I work as the archivist and Back-End developer for Group 5's project. I work specifically with detailing the presentation, archiving any resources or tools used in the project, refreshing the meetings and documentation, and working on the Back-End Express code. The work I do involves rigourous checks on the spelling and correctness of our documentation, while also preparing the group for presentations and meetings. Back-End development involves making sure that our DB connects to our page and properly updates with the columns and correct format. Additionally, my Back-End development involves the linkage of any resources that have update or creation modifications to the DB.
    - Risk Mitigation in the Database: The database initially started with some issues but mostly works the way that is intended. It was essential for the group that at least one to five entries were present for viewing and risk managmenet. Adding two new columns has posed some issues due to the lack of knowledge with working with Express (axios).  However, the team is working together with Ali assiting on some back-end DB development due to his expertise with databases, but I will say that most of the DB work is less risk mitigation and more of coding in the JSX file that is being used.
    - Database Linkage and System: The database will link through the server, however it seems the Express port does not link into the server, which is where I DB functions exist. However, we will have to do a similar DB create and update functions for our new JSX system. The JSX file will work for the group as a tool that will allow for us to use Express properly. The presentation will be a checkpoint on the almost complete system needed for our DB. 


## Conclusion
Description:<br>
&emsp;The developments of Group 5 are done in association, and under the guidance, with Montana State Universities professors, teacher assistants, and online resources provided to the student body. The following acknowledges the assistance that these listed items have given for the overall success of Group 5's task.
<br>
&emsp;Group 5 has developed an Admin access, and unique, blacklist whitelist page for quick banning usage for the BSF entity. The page acts as a clean and unique view for administrators to view all blacklisted individuals, or to blacklist individuals that have recieved many complaints, and or, issues on the grounds of BSF. Group 5 feels we have learned more about the world of Javascript, React, and Express. The group took multiple tools, as listed above, and were able to use a database to access an archive of volunteers and sort them into proper listings. The feature developed took much time to develop, but is a simple tool that implements extra functionality in a select area for any administrator. The Group worked hard to achieve the overall goal of the project and bring it to a working level for future usage. Thus concludes the work done by Group 5 of CSCI 331.

## Works Cited

- Loshin, Peter, and Jessica Sirkin. “What Is Structured Query Language (SQL)?” SearchDataManagement, TechTarget, 7 Feb. 2022, https://www.techtarget.com/      searchdatamanagement/definition/SQL#:~:text=Structured%20Query%20Language%20(SQL)%20is,on%20the%20data%20in%20them.  

- “Node.js SQL.” Node.js MySQL, https://www.w3schools.com/nodejs/nodejs_mysql.asp.  

- Node.js. “Node-Docs.” Node.js, https://nodejs.org/en/docs/.  

- “React-Main-Page.” React, https://reactjs.org/docs/getting-started.html.  

- “W3Schools Free Online Web Tutorials.” W3Schools Online Web Tutorials, https://www.w3schools.com/.  