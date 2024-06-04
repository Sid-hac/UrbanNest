import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const UpdateProfile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex max-md:flex-col lg:ml-16 lg:mr-16 max-md:p-3 md:pl-5  md:h-[100vh] max-md:space-y-5 ">
      <div className="w-full md:w-[60%] flex flex-col md:p-5 overflow-y-scroll space-y-6 mb-2 items-center justify-center ">
        <form className="flex flex-col justify-center items-center gap-3 w-[50%] max-sm:mt-20 max-md:mt-40 md:mt-0 md:w-[50%]">
          <h1 className="text-2xl font-bold ">Update Profile</h1>
          <div className="flex flex-col justify-center items-start w-full">
            <label htmlFor="username" className="text-sm font-semibold">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
              className="border border-green-200 p-2 h-10 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
              className="border border-green-200 p-2 h-10 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="border border-green-200 p-2 h-10 rounded-md w-full"
            />
          </div>
          <button className="w-full bg-yellow-300 h-10 rounded-md font-semibold">
            Update
          </button>
        </form>
      </div>
      <div className="bg-[#fcf5f3] w-full h-full md:flex hidden  md:w-[40%] pb-5 rounded-md ">
        <div className="flex justify-center items-center w-40 h-40 " >
          <img
            src={currentUser.avatar || "./noavatar.png"}
            alt=""
            className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
