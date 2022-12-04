import React from 'react';
import ReactDOM from 'react-dom/client';
import NotFound from "./routes/NotFound/NotFound";
import Home from "./routes/Home/Home";
import Dashboard from "./routes/Dashboard/Dashboard";
import Volunteers from "./components/Dashboard/Volunteers/Volunteers";

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
                        path: "Volunteers",
                        element: <Volunteers />,
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