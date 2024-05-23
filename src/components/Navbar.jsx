import { CircleX, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between lg:ml-28 lg:mr-28 sm:ml-10 sm:mr-10">
        <div className="flex justify-start items-center gap-6 w-[60%]">
          <div className="flex gap-2 " >
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
        <div className="hidden sm:flex justify-end md:bg-[#fcf5f3] gap-6 w-[40%] p-4 text-sm">
          <button className="bg-transparent">Sign in</button>
          <button className="bg-yellow-400 p-2 rounded-md font-semibold hover:scale-105">
            Sign up
          </button>
        </div>
        <div className="flex sm:hidden m-5 ">
          <Menu onClick={() => setOpen(true)} /> 
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-4 h-[100vh] w-[50%] sm:w-[40%] absolute top-0 right-0 bg-black text-white 
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
          <button className="hover:underline bg-transparent ">Sign in</button>
          <button className="bg-yellow-400 p-1 w-20 rounded-md font-semibold hover:scale-105">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
