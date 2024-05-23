import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between lg:ml-28 lg:mr-28 sm:ml-10 sm:mr-10">
      <div className="flex justify-start items-center gap-6 w-[60%] pl-4">
        <h2 className="font-extrabold text-2xl">UrbanNest</h2>
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
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
