import Chat from "@/components/Chat";
import List from "@/components/List";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { Suspense, useContext } from "react";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const data = useLoaderData();
  console.log(data);

  const navigate = useNavigate();
  // const [chats , setChats] = useState()

  const { updateUser, currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   if(!currentUser){
  //     navigate("/login")
  //   }
  // },[currentUser , navigate])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("process.env.BACKEND_URL/api/chat");
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //   };
  //   fetchData();
  // });

  const handleLogout = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      await axios.post(
        // eslint-disable-next-line no-undef
        `https://urbannest-backend-244i.onrender.com/api/auth/logout`,
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
            <Link to="/create">
              <button className="p-2 bg-yellow-300 rounded-md text-sm">
                Create new post
              </button>
            </Link>
          </div>
          <div>
            <Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(postResponse) => <List posts={postResponse.data.userPosts} />}
              </Await>
            </Suspense>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-3 ">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold ">Saved List</h1>
          </div>
          <div>
            <Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading saved posts!</p>}
              >
                {(postResponse) => (
                  <List posts={postResponse.data.savedPosts} />
                )}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
      <div className="bg-[#fcf5f3] w-full h-[100vh]  md:w-[40%] px-5 pb-5 rounded-md ">
        <div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data} /> }
            </Await>
          </Suspense>
          {/* <Chat /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;