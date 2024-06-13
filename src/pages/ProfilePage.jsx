import List from "@/components/List";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { SendHorizontal, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [chat, setChat] = useState(true);
  const navigate = useNavigate();

  const { updateUser, currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   if(!currentUser){
  //     navigate("/login")
  //   }
  // },[currentUser , navigate])

  const handleLogout = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex max-md:flex-col lg:ml-16 lg:mr-16 max-md:p-3 md:pl-5  md:h-fit max-md:space-y-5 ">
      <div
        className={`w-full md:w-[60%] h-[128vh] flex flex-col md:p-5 overflow-y-scroll space-y-6 mb-2`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold ">User Info.</h1>
            <Link to="/profile/update">
              <button className="p-2 bg-yellow-300 rounded-md text-sm">
                Update Profile
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="flex gap-2">
              <h2 className="text-sm font-semibold">Avatar : </h2>
              <img
                src={currentUser.avatar || "./noavatar.png"}
                alt="avatar"
                className="w-5 h-5 rounded-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              <h2 className="text-sm font-semibold">Username : </h2>
              <p className="text-sm">{currentUser.username}</p>
            </div>
            <div className="flex gap-2">
              <h2 className="text-sm font-semibold">Email : </h2>
              <p className="text-sm">{currentUser.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 bg-yellow-300 rounded-md text-sm"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-3 ">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold ">My List</h1>
            <Link to="/create" >
              <button className="p-2 bg-yellow-300 rounded-md text-sm">
                Create new post
              </button>
            </Link>
          </div>
          <div>
            <List />
          </div>
        </div>
      </div>
      <div className="bg-[#fcf5f3] w-full h-full  md:w-[40%] px-5 pb-5 rounded-md ">
        <div className="flex flex-col space-y-4 ">
          <h3 className="text-lg font-bold ">Messages</h3>
          <div className="flex flex-col space-y-3 h-[300px] overflow-scroll ">
            <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer ">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profileimg"
                className="w-5 h-5 rounded-full object-cover"
              />
              <h3 className="text-sm font-semibold ">John Doe</h3>
              <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
            </div>
            <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer  ">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profileimg"
                className="w-5 h-5 rounded-full object-cover"
              />
              <h3 className="text-sm font-semibold ">John Doe</h3>
              <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
            </div>
            <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer  ">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profileimg"
                className="w-5 h-5 rounded-full object-cover"
              />
              <h3 className="text-sm font-semibold ">John Doe</h3>
              <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
            </div>
            <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer  ">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profileimg"
                className="w-5 h-5 rounded-full object-cover"
              />
              <h3 className="text-sm font-semibold ">John Doe</h3>
              <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
            </div>
            <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer  ">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profileimg"
                className="w-5 h-5 rounded-full object-cover"
              />
              <h3 className="text-sm font-semibold ">John Doe</h3>
              <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
            </div>
            <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer  ">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profileimg"
                className="w-5 h-5 rounded-full object-cover"
              />
              <h3 className="text-sm font-semibold ">John Doe</h3>
              <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
            </div>
          </div>
          {chat && (
            <div>
              <div className="flex justify-between items-center bg-yellow-200 p-2 h-full ">
                <div className="flex justify-between items-center gap-2">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="profileimg"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <h3 className="text-sm font-semibold ">John Doe</h3>
                </div>
                <X className="text-xs" onClick={() => setChat(null)} />
              </div>
              <div className="bg-white h-[300px] overflow-scroll ">
                <div className=" flex flex-col space-y-4 p-4   ">
                  <div className="w-full flex justify-start  items-center ">
                    <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
                      <p>Lorem ipsum dolor, sit amet</p>
                      <span className="text-xs text-end">1 hr ago</span>
                    </div>
                  </div>
                  <div className="w-full flex justify-end items-center ">
                    <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
                      <p>Lorem ipsum dolor, sit amet</p>
                      <span className="text-xs text-end">1 hr ago</span>
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-center ">
                    <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
                      <p>Lorem ipsum dolor, sit amet</p>
                      <span className="text-xs text-end">1 hr ago</span>
                    </div>
                  </div>
                  <div className="w-full flex justify-end items-center ">
                    <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
                      <p>Lorem ipsum dolor, sit amet</p>
                      <span className="text-xs text-end">1 hr ago</span>
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-center ">
                    <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
                      <p>Lorem ipsum dolor, sit amet</p>
                      <span className="text-xs text-end">1 hr ago</span>
                    </div>
                  </div>
                  <div className="w-full flex justify-end items-center ">
                    <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
                      <p>Lorem ipsum dolor, sit amet</p>
                      <span className="text-xs text-end block">1 hr ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <textarea
                  name=""
                  id=""
                  className="w-full border border-black rounded-md"
                ></textarea>
                <button className="bg-yellow-300 p-3 ring-2 ring-yellow-200 rounded-sm">
                  <SendHorizontal className="w-5 h-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
