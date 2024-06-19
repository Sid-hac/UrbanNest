import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await axios.post(
        // eslint-disable-next-line no-undef
        `${process.env.BACKEND_URL}/api/auth/login`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      updateUser(res.data);

      navigate("/");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex max-md:flex-col lg:ml-16 lg:mr-16 max-md:p-3 md:pl-5  md:h-[100vh] max-md:space-y-5 ">
      <div className="w-full md:w-[60%] flex flex-col md:p-5 overflow-y-scroll space-y-6 mb-2 items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-3 w-[50%] max-sm:mt-20 max-md:mt-40 md:mt-0 md:w-[50%]"
        >
          <h1 className="text-2xl font-bold ">Welcome Back</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            minLength={3}
            maxLength={20}
            className="border border-green-200 p-2 h-10 rounded-md w-full"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            minLength={4}
            maxLength={10}
            className="border border-green-200 p-2 h-10 rounded-md w-full"
          />
          <button
            disabled={isLoading}
            className="w-full bg-yellow-300 h-10 rounded-md font-semibold"
          >
            Login
          </button>
          {error && <span className="text-red-500 text-sm ">{error}</span>}
        </form>
      </div>
      <div className="bg-[#fcf5f3] w-full h-full md:flex hidden  md:w-[40%] pb-5 rounded-md ">
        <img src="/bg.png" alt="img" className="object-cover" />
      </div>
    </div>
  );
};

export default Login;
