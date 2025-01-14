import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/Home";
import PetListing from "../pages/petListing";

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
      ]
    },
  ]);

export default router;