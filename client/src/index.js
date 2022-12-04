import React from 'react';
import ReactDOM from 'react-dom/client';
import NotFound from "./routes/NotFound/NotFound";
import Home from "./routes/Home/Home";
import Dashboard from "./routes/Dashboard/Dashboard";
import Users from "./components/Dashboard/Users/Users";

import {
    createBrowserRouter, RouterProvider
} from "react-router-dom"
import Vouchers from './components/Dashboard/Vouchers/Vouchers';

// Define the routes and the routing structure
const routes = [
    {
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "users",
                        element: <Users />,
                    },
                    {
                        path: "vouchers",
                        element: <Vouchers />,
                    }
                ],
            }]
    }

]

// A router that routes to the pages defined in the 'routes' array
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);