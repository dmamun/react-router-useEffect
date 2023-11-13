import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Products from './Components/Products.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Product from './Components/Product.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/products",
        element:<Products></Products>
      },
      {
        path:"/product/:id",
        element:<Product></Product>

      },

      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      }
    ]
    
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
