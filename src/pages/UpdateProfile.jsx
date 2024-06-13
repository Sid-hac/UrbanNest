import UploadWidget from "@/components/UploadWidget";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [avatar, setAvatar] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await axios.put(
        `http://localhost:5000/api/user/${currentUser.id}`,
        {
          username,
          email,
          password,
          avatar : avatar[0]
        },
        {
          withCredentials: true,
        }
      );

      updateUser(res.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex max-md:flex-col lg:ml-16 lg:mr-16 max-md:p-3 md:pl-5  md:h-[100vh] max-md:space-y-5 ">
      <div className="w-full md:w-[60%] flex flex-col md:p-5 overflow-y-scroll space-y-6 mb-2 items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-3 w-[50%] max-sm:mt-20 max-md:mt-40 md:mt-0 md:w-[50%]"
        >
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
        {error && <span className="text-red-500 text-sm ">{error}</span>}
      </div>
      <div className="bg-[#fcf5f3] w-full h-full md:flex flex-col gap-3 hidden justify-center items-center  md:w-[40%] pb-5 rounded-md ">
        <div className="flex justify-center items-center w-40 h-40 border border-black">
          <img
            src={avatar[0] || currentUser.avatar || "/noavatar.png"}
            alt=""
            className=" object-cover w-full"
          />
        </div>
        <UploadWidget
          uwConfig={{
            cloudName: "dkfaywt7t",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
};

export default UpdateProfile;
