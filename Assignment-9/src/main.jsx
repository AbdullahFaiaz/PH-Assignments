import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ContextComponent from './Context/ContextComponent.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Pages/Root/Root.jsx';
import Login from './Pages/Login & Register/Login.jsx';
import Register from './Pages/Login & Register/Register.jsx';
import Home from './Pages/Home/Home.jsx';
import ErrorPage from './Pages/Shared/ErrorPage.jsx';
import UpdateProfile from './Pages/Private/UpdateProfile.jsx';
import UserProfile from './Pages/Private/UserProfile.jsx';
import PrivateRoute from './Pages/Private/PrivateRoute.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Detail from './Pages/Private/Detail.jsx';
import SavedProperty from './Pages/Private/SavedProperty.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:"/",
        element:<Home/>,
        loader: () =>fetch("/data.json")
      },
      {
        path:"/segment/:id",
        element: <PrivateRoute><Detail/></PrivateRoute>,
        loader: () =>fetch("/data.json")
      },
      {
        path:"/saved-property",
        element: <PrivateRoute><SavedProperty/></PrivateRoute>,
        loader: () =>fetch("/data.json")
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
        path:"/updateProfile",
        element: <PrivateRoute><UpdateProfile/></PrivateRoute> 
      },
      {
        path:"/userProfile",
        element:<PrivateRoute><UserProfile/></PrivateRoute> 
      },


    ]
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
