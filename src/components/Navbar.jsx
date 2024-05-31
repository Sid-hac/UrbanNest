import { CircleX, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <>
      <div className="flex justify-between lg:ml-16 lg:mr-16 pl-5">
        <div className="flex  justify-start items-center gap-6 w-[60%]">
          <div className="flex gap-2 ">
            <img src="./logo.png" alt="logo" className="h-10 w-10" />
            <h2 className="font-extrabold text-2xl">UrbanNest</h2>
          </div>
          <div className="hidden sm:flex gap-6 text-pretty text-sm">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contacts</a>
            <a href="/">Agents</a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2  w-[40%]">
          {user ? (
            <div className="flex justify-end items-center  md:bg-[#fcf5f3] w-full gap-4 py-4 pr-4">
              <div className="flex justify-center items-center gap-1 ">
                <Link to="/profile" className="relative" >
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="profileimg"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                   <span className="flex md:hidden absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500  justify-center items-center text-sm font-semibold ">
                  3
                </span>
                </Link>
               
                <span className="hidden md:flex">John Doe</span>
              </div>
              <div className="relative bg-yellow-300 p-2 rounded-md hidden md:flex">
                <Link to="/profile">Profile</Link>
                <span className=" absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-sm font-semibold ">
                  3
                </span>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex justify-end md:bg-[#fcf5f3] gap-6 w-full p-4 text-sm">
              <button className="bg-transparent">Sign in</button>
              <button className="bg-yellow-400 p-2 rounded-md font-semibold hover:scale-105">
                Sign up
              </button>
            </div>
          )}
          <div className="flex md:hidden m-5 ">
            <Menu onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-4 h-[100vh] w-[50%] sm:w-[40%] absolute top-0 right-0 bg-black text-white z-10 
         ${open ? "translate-x-0" : "hidden"} ease-in-out duration-500 `}
      >
        <CircleX
          className="flex fixed top-2 right-2 "
          onClick={() => setOpen(false)}
        />
        <div className="flex flex-col justify-center items-center gap-4 h-[100vh] w-[40%] bg-black text-white ">
          <a className="hover:underline " href="/">
            Home
          </a>
          <a className="hover:underline " href="/">
            About
          </a>
          <a className="hover:underline " href="/">
            Contacts
          </a>
          <a className="hover:underline " href="/">
            Agents
          </a>
          {user ? (
            <div className="flex justify-center items-center gap-2">
              <div className="flex justify-center items-center gap-1 ">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="profileimg"
                  className="w-10 h-10 rounded-md object-cover"
                />
                <span>John Doe</span>
              </div>
              <Link to="/profile">Profile</Link>
            </div>
          ) : (
            <>
              <button className="hover:underline bg-transparent ">
                Sign in
              </button>
              <button className="bg-yellow-400 p-1 w-20 rounded-md font-semibold hover:scale-105">
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
