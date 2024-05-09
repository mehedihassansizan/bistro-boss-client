import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element: <Home></Home> 
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: '/shop/:category',
          element: <OurShop></OurShop>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
    ]
  },
]);
