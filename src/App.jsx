import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import Listings from "./pages/Listings";
import Details from "./pages/Details";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
