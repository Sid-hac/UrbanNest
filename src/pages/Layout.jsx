import Navbar from "@/components/Navbar";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";

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

const RestrictedLayout = () => {

  const {currentUser} = useContext(AuthContext)

  if(!currentUser){
    return <Navigate to='/login' />
  }


  return (
    <div className="relative">
      <Navbar />
      <div>
        <Outlet/>
      </div>
    </div>
  );
}
export { Layout , RestrictedLayout};