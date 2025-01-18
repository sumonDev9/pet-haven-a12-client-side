import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/Home";
import Login from "../pages/AuthLayout/Login";
import Register from "../pages/AuthLayout/Register";
import PetListing from "../pages/PetListing";
import PetDetails from "../pages/PetDetails";
import DashBoard from "../Layout/DashBoard";
import AddPets from "../pages/Dashboard/UserDashboard/AddPets";
import CreateDonation from "../pages/Dashboard/UserDashboard/createDonation";
import AllUsers from "../pages/Dashboard/AdminDashBoard/AllUsers";
import AllPets from "../pages/Dashboard/AdminDashBoard/AllPets";
import AllDonations from "../pages/Dashboard/AdminDashBoard/AllDonations";

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
        // {
        //   path: '/donationCampaigns',
        //   element: <PetListing></PetListing>
        // },
        {
          path: '/petdetails/:id',
          element: <PetDetails></PetDetails>
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
    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'addPets',
          element: <AddPets></AddPets>
        },
        {
          path: 'createDonation',
          element: <CreateDonation></CreateDonation>
        },
        // admin route
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'allPets',
          element: <AllPets></AllPets>
        },
        {
          path: 'allDonations',
          element: <AllDonations></AllDonations>
        },
      ]
    }
  ]);

export default router;