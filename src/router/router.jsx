import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>
    },
  ]);

export default router;