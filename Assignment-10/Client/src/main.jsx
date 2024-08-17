import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home/Home';

import Root from './Pages/Root/Root';

import { HelmetProvider } from 'react-helmet-async';
import Login from './Pages/Login & Register/Login';
import Register from './Pages/Login & Register/Register';
import ContextComponent from './Context/ContextComponent';
import ErrorPage from './Pages/Shared/ErrorPage';
import PrivateRoute from './Pages/Private/PrivateRoute';
import Add from './Pages/Private/Add';
import AllSpots from './Pages/All Spots/AllSpots';
import ViewDetails from './Pages/Private/ViewDetails';
import MyList from './Pages/Private/MyList';
import CountrySpots from './Pages/Country Spots/CountrySpots';
import Update from './Pages/Private/Update';
import UserProfile from './Pages/Private/UserProfile';

const router = createBrowserRouter([
  {
    //https://server-fbz4si1aj-abdullah-faiazs-projects.vercel.app
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element: <Register/>
      },
      {
        path: "/spots",
        element: <AllSpots/>
      },
      {
        path: "/add",
        element: <PrivateRoute><Add/></PrivateRoute>
      },
      {
        path: "/userProfile",
        element: <PrivateRoute><UserProfile/></PrivateRoute>
      },
      {
        path:"update/:id",
        element: <PrivateRoute><Update/></PrivateRoute>,
        loader: ({params}) => fetch(`https://server-five-pearl.vercel.app/update/${params.id}`)
      },
      {
        path: "/countrySpots/:country_name",
        element:<CountrySpots/>,
        loader: ({params}) => fetch(`https://server-five-pearl.vercel.app/countrySpots/${params.country_name}`)
      },
      {
        path: "/mySpots/:email",
        element: <PrivateRoute>  <MyList/> </PrivateRoute>,
        loader: ({params}) => fetch(`https://server-five-pearl.vercel.app/spots/${params.email}`)
      },
      {
        path: "/spot/:id",
        element: <PrivateRoute>  <ViewDetails/> </PrivateRoute>,
        loader: ({params}) => fetch(`https://server-five-pearl.vercel.app/spot/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <ContextComponent>
      <RouterProvider router={router} />
    </ContextComponent>
    </HelmetProvider>
  </React.StrictMode>,
)
