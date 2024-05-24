import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import Listings from "./pages/Listings";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
