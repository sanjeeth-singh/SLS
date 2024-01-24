import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './home';
import Contact from './contact';
import Aboutus from './aboutus';
import Softwareskills from './softwareskills';
import Hardwareskills from './hardwareskills';
import Countries from './countries';
import Countrydet from './countrydet';
const router = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,
        children: [
            {
                path: "/home",
                element:<Home></Home>,
            },
            {
                path: "/contact",
                element:<Contact></Contact>,
            },
            {
                path: "/countries",
                element:<Countries></Countries>,
                children:[
                    {
                        path: "countrydet/:cname",
                        element:<Countrydet></Countrydet>,
                    },
                ]
            },
            {
                path: "/aboutus",
                element:<Aboutus></Aboutus>,
                children: [
                    {
                        path: "softwareskills",
                        element:<Softwareskills></Softwareskills>,
                    },
                    {
                        path: "hardwareskills",
                        element:<Hardwareskills></Hardwareskills>,
                    },
                ]
            },
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
