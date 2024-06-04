import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import  { Layout,RestrictedLayout } from "./pages/Layout";
import Listings from "./pages/Listings";
import Details from "./pages/Details";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UpdateProfile from "./pages/UpdateProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/listings",
          element: <Listings/>,
        },
        {
          path: "/:id",
          element: <Details/>,
        },
     
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
      
      ],
    },
    {
      path:'/',
      element:<RestrictedLayout/>,
      children:[
        {
          path: "/profile",
          element: <ProfilePage/>,
        },
        {
          path: "/profile/update",
          element: <UpdateProfile/>,
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
