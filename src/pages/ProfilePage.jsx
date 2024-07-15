import Chat from "@/components/Chat";
// import { Footer } from "@/components/Footer";
import Footer1 from "@/components/Footer1";
import List from "@/components/List";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { Suspense, useContext } from "react";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const data = useLoaderData();

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
  //       const res = await axios.get("process.env.https://urbannest-backend-244i.onrender.com/api/chat");
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //   };
  //   fetchData();
  // });

  const handleLogout = async () => {
    try {
      await axios.post(
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
    <section className=" relative flex flex-col gap-3">
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
              <Suspense
                fallback={
                  <div className="w-full h-full flex justify-center items-center">
                    <Loader2 className="w-5 h-5 text-center animate-spin" />
                  </div>
                }
              >
                <Await
                  resolve={data.postResponse}
                  errorElement={<p>Error loading posts!</p>}
                >
                  {(postResponse) => (
                    <>
                      <List posts={postResponse.data.userPosts} />
                      {postResponse.data.userPosts.length === 0 && (
                        <div>
                          <p className="text-sm text-center font-medium">
                            No posts found
                          </p>
                          <Link
                            className="text-xs text-muted-foreground text-center flex justify-center underline"
                            to="/listings"
                          >
                            Browse Posts
                          </Link>
                        </div>
                      )}
                    </>
                  )}
                </Await>
              </Suspense>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-3 ">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold ">Saved List</h1>
            </div>
            <div>
              <Suspense
                fallback={
                  <div className="w-full h-full flex justify-center items-center">
                    <Loader2 className="w-5 h-5 text-center animate-spin" />
                  </div>
                }
              >
                <Await
                  resolve={data.postResponse}
                  errorElement={<p>Error loading saved posts!</p>}
                >
                  {(postResponse) => (
                    <>
                      <List posts={postResponse.data.savedPosts} />
                      {postResponse.data.savedPosts.length === 0 && (
                        <div className="flex flex-col gap-4">
                          <p className="text-sm text-center font-medium">
                            No saved posts found
                          </p>
                          <Link
                            className="text-xs text-muted-foreground text-center flex justify-center underline"
                            to="/listings"
                          >
                            Browse Posts
                          </Link>
                        </div>
                      )}
                    </>
                  )}
                </Await>
              </Suspense>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-fit md:h-[130vh] md:w-[40%] px-5 pb-5 rounded-md ">
          <div>
            <Suspense
              fallback={
                <div className="w-full h-full flex justify-center items-center">
                  <Loader2 className="w-5 h-5 text-center animate-spin" />
                </div>
              }
            >
              <Await
                resolve={data.chatResponse}
                errorElement={<p>Error loading chats!</p>}
              >
                {(chatResponse) => (
                  <>
                    <Chat chats={chatResponse.data} />
                    {chatResponse.data.length === 0 && (
                      <div className="w-full h-full flex flex-col gap-4 justify-center items-center" >
                        <img src="nochat.jpeg" alt="no chats" className=""/>
                        <Link to="/listings">
                            <p className="text-sm text-muted-foreground text-center flex justify-center underline">
                              Start  chat
                            </p>
  
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </Await>
            </Suspense>
            {/* <Chat /> */}
          </div>
        </div>
      </div>
      <Footer1/>
      <div className="absolute -z-[1] right-0 top-0 w-[50%] h-[50%] rounded-full blue__gradient " />
      <div className="absolute -z-[1] left-0 bottom-0 w-[40%] h-[50%] rounded-full pink__gradient " />
    </section>
  );
};

export default ProfilePage;
