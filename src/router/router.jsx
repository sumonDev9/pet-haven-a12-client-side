import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/Home";
import PetListing from "../pages/petListing";
import Login from "../pages/AuthLayout/Login";
import Register from "../pages/AuthLayout/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: '/', 
            element: <Home></Home>
        },
        {
          path: '/petListing',
          element: <PetListing></PetListing>
        },
        {
          path: '/donationCampaigns',
          element: <PetListing></PetListing>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        
      ]
    },
  ]);

export default router;