
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home';
import Root from './Root/Root';
import ListedBooks from './Pages/ListedBooks';
import PagesToRead from './Pages/PagesToRead';
import ErrorPage from './Pages/ErrorPage';
import Details from './Pages/Details';
import ReadTab from './Components/ReadTab';
import WishTab from './Components/WishTab';
import About from './Pages/About';
import Empty from './Components/Empty';
import ContactUs from './Pages/ContactUs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/listedbooks',
        element:<ListedBooks></ListedBooks>,
        loader: () => fetch('/data.json'),
        children:[
          {
            index: true,
            element: <ReadTab></ReadTab>,
            loader: () => fetch('/data.json')
          },
          {
            path:'/listedbooks/wishlist',
            element:<WishTab></WishTab>,
            loader: () => fetch('/data.json')
          }
        ]
      },
      {
        path:'/pagestoread',
        element:<PagesToRead></PagesToRead>,
        loader:() => fetch('/data.json')
      },
      {
        path:'/details/:id',
        element: <Details></Details>,
        loader: () => fetch('/data.json')
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<ContactUs></ContactUs>
      }
    ]
  }
])


// React.StrictMode
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
            <RouterProvider router={router}></RouterProvider>
  </>,
)
