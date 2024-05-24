import Navbar from "@/components/Navbar";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
