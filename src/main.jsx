import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home';
import Root from './Root/Root';
import Donation from './Donation/Donation';
import Statistics from './Statistics/Statistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>  ,
    children:[
     {
      path:'/',
      element: <Home></Home>
    },
    {
     path:'/donate',
     element: <Donation></Donation>
    },

    {
      path:'/state',
      element: <Statistics></Statistics>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)