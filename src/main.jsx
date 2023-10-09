import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import ServiceDetails from './pages/ServiceDetails';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ContactUs from './pages/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('/data.json'),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/service/:id",
        element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader : ()=>fetch('/data.json')
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/contact",
        element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
