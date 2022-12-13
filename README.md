### Alpine BSF Volunteer Tracker I

# Blacklisting/Whitelisting Volunteers
Description:<br> 
&emsp;Group 5, delegated to presenting a blacklist/whitelist system to properly ban or permit volunteers to the foundation through the platform. BSF foundation works as a ski foundation and has many volunteers, the following page that group 5 is developing will bring more quality of life progress to the safety of the foundation. Administrators can check, delete, update, and ban members with our feature/ environment on the web platform.

- Ali Khaef, Front-End Developer: User-Interface and View Builder
    - Site Link: [Ali's Link to Site](http://csci331.cs.montana.edu:5010/)
- Kelby Abel, Back-End Developer: Javascript/ Interaction Builder
    - Site Link: [Kelby's Link to Site](http://csci331.cs.montana.edu:5073/)
- Jace Zavarelli, Back-End Developer: Database Interaction Builder/ Writer and Archivist
    - Site Link: [Jace's Link to Site](http://csci331.cs.montana.edu:5046/)

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
- **Routing**:  React-routing-DOM is a tool that allows the navigation of webpages within the react npm packaged tools, which allows us to have a proper navigation system within our feature. The group decided upon this tool following the demonstration of Group 20's navigation systems, which was properly referenced below. The team modified the code from the web documentation and works by a navigation file, hyperlink, system. 

## Individual Notes
Description:<br>
&emsp;The delegated and described task, as of, by each member within Group 5. Each member of Group 5 has given different contributions and notes on the work accomplished within the project. Notes can consist of problems, risk, developments, tools, and much more that is assessed within the greater project.

- Ali
    - Personal Work: I work as the Front-End for Group 5's Project, and I am the main developer of all the structure and partial design of the Front-End. I worked on developing the structural look of the Logo, the Current Entries Table, the Footer Design, and many other parts of our feature. My Front-End development helped to set columns and lanes that can be seen across all our pages, and I had part in making sure that the background image fits properly to the whole of our project feature. In this project after talking to my team, i decided to use bootstrap as my main goal to design and style our page. i used bootstrap to create good looking buttons which you can hover on it and the color changes. i used bootstrap to implement our forms and panels as well and give it a classic good look. i decided to use a border for our add Volunteers section since our background for the page was light.  
    - The development had lots of issues during development and it took me a good amount of time. The scaling for the page was a time consuming process that involved a lot more steps to work with the Back-Ends developments. I also worked very closely with Jace to develop most of our feature page and have the items that we needed to display. The styling on the home page was also done by me and had a lot involvement with setting up the proper layout, then modifying the CSS to suit the groups needs.
    - I found that there was a major risk to scaling on different platforms early on into the project, and I went into a lot of the development never doing front-end before, which was because I wanted to challenge myself. I found that working with my group members and reaching out to Britney helped me but I definately need to practice a lot more CSS and front-end. The development done is very new for me but I am learning lots to work with front-end much easier.


- Kelby
    - Personal Work: I work as both a Front-End and kind of Back-End developer for Group 5's project. I worked on implementing CSS, HTML, and Bootstrap to help with the design aspect of the site. I also worked on react components to make different pages work.
    - Navigation: I used reactDOM using React router to create paging between each of our sites pages. Using Router you are able to set paths for different react components that are linked to via the Link field (which implements HTML <a> tag). I used bootstrap to give a listing style and formatted the navbar to be on every page with consistent styling.
    - Design: Along with bootstrapping the navbar, both Ali and I worked on the design aspects of different pages, I took to design the Whitelist and Current Entries page. The Whitelist page uses a bootstrap table with clickable rows and bootstrap buttons (Jace fully implemented clickable rows) to display details of each volunteer. For the current entries page, I made the buttons match previous pages and simplified the design of displaying the entries. I also helped Ali with designing of the Add Entry page. 


- Jace
    - Personal Work: I work as the archivist and Back-End developer for Group 5's project. I work specifically with detailing the presentation, archiving any resources or tools used in the project, refreshing the meetings and documentation, and working on the Back-End Express code. The work I do involves rigourous checks on the spelling and correctness of our documentation, while also preparing the group for presentations and meetings. Back-End development involves making sure that our DB connects to our page and properly updates with the columns and correct format. Additionally, my Back-End development involves the linkage of any resources that have update or creation modifications to the DB.
    - Risk Mitigation in the Database: The database initially started with some issues but mostly works the way that is intended. It was essential for the group that at least one to five entries were present for viewing and risk managmenet. Adding two new columns has posed some issues due to the lack of knowledge with working with Express (axios).  However, the team is working together with Ali assiting on some back-end DB development due to his expertise with databases, but I will say that most of the DB work is less risk mitigation and more of coding in the JSX file that is being used.
    - Database Linkage and System: The database will link through the server, however it seems the Express port does not link into the server, which is where I DB functions exist. However, we will have to do a similar DB create and update functions for our new JSX system. The JSX file will work for the group as a tool that will allow for us to use Express properly. The presentation will be a checkpoint on the almost complete system needed for our DB. 


## Conclusion
Description:<br>
&emsp;The developments of Group 5 are done in association, and under the guidance, with Montana State Universities professors, teacher assistants, and online resources provided to the student body. The following acknowledges the assistance that these listed items have given for the overall success of Group 5's task.
<br>
&emsp;Group 5 has developed an Admin access, and unique, blacklist whitelist page for quick banning usage for the BSF entity. The page acts as a clean and unique view for administrators to view all blacklisted individuals, or to blacklist individuals that have recieved many complaints, and or, issues on the grounds of BSF. Group 5 feels we have learned more about the world of Javascript, React, and Express. The group took multiple tools, as listed above, and were able to use a database to access an archive of volunteers and modifiy them by their specific listings. The feature developed took much time to develop, but is a simple tool that implements extra functionality in a select area for any administrator. The Group worked hard to achieve the overall goal of the project and bring it to a working level for future usage possibly within the administrative tools of another group.

## Works Cited

- Loshin, Peter, and Jessica Sirkin. “What Is Structured Query Language (SQL)?” SearchDataManagement, TechTarget, 7 Feb. 2022, https://www.techtarget.com/      searchdatamanagement/definition/SQL#:~:text=Structured%20Query%20Language%20(SQL)%20is,on%20the%20data%20in%20them.  

- “Node.js SQL.” Node.js MySQL, https://www.w3schools.com/nodejs/nodejs_mysql.asp.  

- Node.js. “Node-Docs.” Node.js, https://nodejs.org/en/docs/.  

- “React-Main-Page.” React, https://reactjs.org/docs/getting-started.html.  

- “W3Schools Free Online Web Tutorials.” W3Schools Online Web Tutorials, https://www.w3schools.com/.  

- Hooks and Node Items, https://www.geeksforgeeks.org/how-to-change-the-state-of-react-component-on-click/

- Router-Dom, https://www.geeksforgeeks.org/reactjs-router/

- Further Assistance, The TA Britney, Group-20 on Paging, 

- Bootstrap, https://getbootstrap.com/docs/4.0/getting-started/introduction/

- Background-image, https://www.reddit.com/r/reactjs/comments/kingwg/full_screen_background_image/
    
- Stackoverflow, Stackoverflow was used in our project and was referenced among some of the code in our project.

