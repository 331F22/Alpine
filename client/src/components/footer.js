import React from "react";

const Footer =()=>{
    return(
        <div>
            <h2>Footer</h2>
            Chris Vazquez, k87d362
            port 5002, 3002
            <p>
                My role in the project was to build:
                <ul>
                    <li> client/src/App/header -  react component for the website logo and menu icon</li>
                    <li> client/src/App/Vouchers -  a react component with a table for displaying the vouchers</li>
                    <li> tbd - a dashboard layout. This will hold all the tables (users and vouchers). Will also be react
                        component and we will use react router to navigate through the different components once they're built</li>
                </ul>


                <p> All css for the components I built is in the App.css file.
                    <br/> <a href={"https://github.com/cv458940/BSF-Starter"}> Chris's Github</a>
                </p>

            </p>
        </div>
    )
}
export default Footer