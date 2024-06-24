import { AuthContext } from "@/context/AuthContext";
import { useNotificationStore } from "@/lib/notificationStore";
import { CircleX, Menu } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);
  if (currentUser) fetch();

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
            <a href="/our-story">About</a>
            <a href="/contact-us">Contacts</a>
          </div>
        </div>
        <div className="flex justify-center items-center w-[40%]">
          {currentUser ? (
            <div className="flex justify-end items-center  md:bg-[#fcf5f3] w-full gap-4 py-4 pr-4">
              <div className="flex justify-center items-center gap-1 ">
                <Link to="/profile" className="relative">
                  <img
                    src={currentUser.avatar || "./noavatar.png"}
                    alt="profileimg"
                    className="w-8 h-8 rounded-full object-cover "
                  />
                  {number > 0 && (
                    <span className="flex md:hidden absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500  justify-center items-center text-sm font-semibold ">
                      {number}
                    </span>
                  )}
                </Link>

                <span className="hidden text-sm font-semibold  md:flex">
                  {currentUser.username}
                </span>
              </div>
              <div className="relative bg-yellow-300 p-2 rounded-md hidden md:flex">
                <Link to="/profile">Profile</Link>
                {number > 0 && (
                  <span className=" absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-sm font-semibold ">
                    {number}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden md:flex justify-end md:bg-[#fcf5f3] gap-6 w-full p-4 text-sm">
              <Link to="/login" className="flex justify-center items-center">
                <button className="bg-transparent">Sign in</button>
              </Link>
              <Link to="/register" className="flex justify-center items-center">
                <button className="bg-yellow-400 p-2 rounded-md font-semibold hover:scale-105">
                  Sign up
                </button>
              </Link>
            </div>
          )}
          <div className="flex md:hidden w-10 h-10 justify-center items-center">
            <Menu onClick={() => setOpen(true)} className="w-full " />
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
          <a className="hover:underline " href="/our-story">
            About
          </a>
          <a className="hover:underline " href="/contact-us">
            Contacts
          </a>
          {currentUser ? (
            <div className="flex justify-center items-center gap-2">
              {/* <div className="flex justify-center items-center gap-1 ">
                <img
                  src={currentUser.avatar ||'./noavatar.png' }
                  alt="profileimg"
                  className="w-10 h-10 rounded-md object-cover "
                />
                <span>John Doe</span>
              </div> */}
              <Link to="/profile">Profile</Link>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="hover:underline bg-transparent ">
                  Sign in
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-yellow-400 p-1 w-20 rounded-md font-semibold hover:scale-105">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
