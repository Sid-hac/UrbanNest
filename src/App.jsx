import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import  { Layout,RestrictedLayout } from "./pages/Layout";
import Listings from "./pages/Listings";
import Details from "./pages/Details";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UpdateProfile from "./pages/UpdateProfile";
import CreatePost from "./pages/CreatePost";
import { ListPage, singlePage , ProfilePageloader } from "./lib/loaders";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

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
          loader : ListPage,
        },
        {
          path: "/:id",
          element: <Details/>,
          loader : singlePage
        },
     
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/create",
          element: <CreatePost/>,
        },
        {
          path: "/searching/hidden/our-story",
          element: <About/>,
        },
        {
          path: "/searching/hidden/contact-us",
          element: <ContactUs/>,
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
          loader: ProfilePageloader
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
