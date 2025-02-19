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
import MyDonation from "../pages/Dashboard/UserDashboard/MyDonation";
import CategoryList from "../pages/CategoryList";
import AdminRoute from "../provider/AdminRoute";
import ErrorPage from "../components/ErrorPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import UserProfile from "../pages/Dashboard/UserDashboard/UserProfile";
// import AdminHome from "../pages/Dashboard/AdminDashBoard/AdminHome";

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
          path: 'category/:name',
          element: <CategoryList></CategoryList>
        },
        {
          path: '/petdetails/:id',
          element: <PrivetRoute><PetDetails></PetDetails></PrivetRoute>
        },
        {
          path: '/donation/:id',
          element: <PrivetRoute><DonationDatails></DonationDatails></PrivetRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        
      ]
    },
    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'userProfile',
          element: <PrivetRoute><UserProfile></UserProfile></PrivetRoute>
        },
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
          loader:({params}) => fetch(`https://pet-adoption-platform-sever-side.vercel.app/pets/${params.id}`)
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
          loader:({params}) => fetch(`https://pet-adoption-platform-sever-side.vercel.app/donationCampaigns/${params.id}`)
        },
        {
          path: 'adoptionRequests',
          element: <PrivetRoute><AdoptionRequests></AdoptionRequests></PrivetRoute>
        },
        {
          path: 'myDonation',
          element: <PrivetRoute><MyDonation></MyDonation></PrivetRoute>
        },
        // admin route
        // {
        //   path: 'adminHome',
        //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        // },
        {
          path: 'adminProfile',
          element: <AdminRoute><UserProfile></UserProfile></AdminRoute>
        },
        {
          path: 'allUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'allPets',
          element: <AdminRoute><AllPets></AllPets></AdminRoute>
        },
        {
          path: 'allDonations',
          element: <AdminRoute><AllDonations></AllDonations></AdminRoute>
        },
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;