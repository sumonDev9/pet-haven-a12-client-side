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
import MyAddpets from "../pages/Dashboard/UserDashboard/MyAddpets";
import UpdatePet from "../pages/Dashboard/UserDashboard/UpdatePet";
import AdoptionRequests from "../pages/Dashboard/UserDashboard/adoptionRequests";
import DonationCampaigns from "../pages/DonationCampaigns";
import DonationDatails from "../pages/donationDatails";
import PrivetRoute from "../provider/PrivetRoute";
import MyDonationCampaign from "../pages/Dashboard/UserDashboard/MyDonationCampaign";
import UpdatedDonation from "../pages/Dashboard/UserDashboard/UpdatedDonation";

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
          element: <DonationCampaigns></DonationCampaigns>
        },
        {
          path: '/petdetails/:id',
          element: <PetDetails></PetDetails>
        },
        {
          path: '/donation/:id',
          element: <DonationDatails></DonationDatails>
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
          element: <PrivetRoute><AddPets></AddPets></PrivetRoute>
        },
        {
          path: 'myAddpets',
          element: <PrivetRoute><MyAddpets></MyAddpets></PrivetRoute>
        },
        {
          path: 'updatePet/:id',
          element: <PrivetRoute><UpdatePet></UpdatePet></PrivetRoute>,
          // loader: ({params}) => fetch(`http://localhost:5000/pets/${params.id}`)
          loader:({params}) => fetch(`http://localhost:5000/pets/${params.id}`)
        },
        {
          path: 'createDonation',
          element: <PrivetRoute><CreateDonation></CreateDonation></PrivetRoute>
        },
        {
          path: 'myDonationCampaign',
          element: <PrivetRoute><MyDonationCampaign></MyDonationCampaign></PrivetRoute>
        },
        {
          path: 'updateDonation/:id',
          element: <PrivetRoute><UpdatedDonation></UpdatedDonation></PrivetRoute>,
          loader:({params}) => fetch(`http://localhost:5000/donationCampaigns/${params.id}`)
        },
        {
          path: 'adoptionRequests',
          element: <PrivetRoute><AdoptionRequests></AdoptionRequests></PrivetRoute>
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