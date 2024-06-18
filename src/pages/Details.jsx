import Map from "@/components/Map";
import Slider from "@/components/Slider";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import DOMPurify from 'dompurify'
import {
  Bath,
  BedDouble,
  Bookmark,
  BusFront,
  Fence,
  Frame,
  MapPin,
  MessageSquare,
  PawPrint,
  School,
  UtensilsCrossed,
  UtilityPole,
} from "lucide-react";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
  const post = useLoaderData();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [saved, setSaved] = useState(post.isSaved);

  const handleSave = async () => {
    setSaved((prev) => !prev);
    if (!currentUser) {
      navigate("/login");
    }

    try {
      await axios.post(
        "http://localhost:5000/api/user/save",
        {
          postId: post.id,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
      setSaved((prev) => !prev);
    }
  };

  return (
    <div className="flex max-md:flex-col lg:ml-16 lg:mr-16 max-md:p-3 md:pl-5  md:h-[100vh] max-md:space-y-5 ">
      <div className="w-full md:w-[60%] flex flex-col md:p-5 overflow-y-scroll space-y-6 mb-2">
        <div>
          <Slider images={post.images} />
        </div>
        <div className="flex justify-between items-center h-fit">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <div className="flex gap-1">
              <MapPin className="text-sm w-4 " />
              <p>{post.address}</p>
            </div>
            <p className="bg-yellow-200 w-fit p-1 rounded-sm ">${post.price}</p>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center bg-yellow-100 w-28 h-full p-3 rounded-md ">
              <img
                src={post.user.avatar}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover "
              />
              <p className="text-sm font-medium text-black">
                {post.user.username}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm"  dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }} ></div>
      </div>
      <div className="bg-[#fcf5f3] w-full h-[125vh]  md:w-[40%] px-5 pb-5 rounded-md ">
        <div className="flex flex-col space-y-3 mt-2">
          <h2 className="text-lg font-semibold ">General</h2>
          <div className="bg-white rounded-md ">
            <div className="p-2 flex justify-start items-start gap-2  ">
              <UtilityPole className="w-4 h-4 mt-1 " />
              <div className="flex flex-col justify-center items-start">
                <p className="text-sm font-semibold ">Utilities</p>
                <p className="text-xs">{post.postDetail.utilities} is responsible</p>
              </div>
            </div>
            <div className="p-2 flex justify-start items-start gap-2">
              <PawPrint className="w-4 h-4 mt-1" />
              <div className="flex flex-col justify-center items-start">
                <p className="text-sm font-semibold ">Pet Policy</p>
                {post.postDetail.pet === "Allowed" ? (
                  <p className="text-xs">pet Allowed</p>
                ) : (
                  <p className="text-xs">pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="p-2 flex justify-start items-start gap-2">
              <Fence className="w-4 h-4 mt-1 " />

              <div className="flex flex-col justify-center items-start">
                <p className="text-sm font-semibold ">Property Fees</p>
                <p className="text-xs">
                  Must have 3x the rent in total household income
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 ">
            <h2 className="text-lg font-semibold ">Room Sizes </h2>
            <div className="flex justify-between items-center space-x-3 ">
              <div className="flex gap-2 bg-white w-fit p-2 rounded-md ">
                <Frame className="w-4 h-4 mt-1 " />
                <p className="text-sm">{post.postDetail.size} sq.ft </p>
              </div>
              <div className="flex gap-2 bg-white w-fit p-2 rounded-md ">
                <BedDouble className="w-4 h-4 mt-1 " />
                <p className="text-sm">{post.bedroom} bedroom </p>
              </div>
              <div className="flex gap-2 bg-white w-fit p-2 rounded-md ">
                <Bath className="w-4 h-4 mt-1 " />
                <p className="text-sm">{post.bathroom} bathroom </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3 ">
            <h2 className="text-lg font-semibold ">Nearby Places</h2>
            <div className="bg-white flex justify-between items-center p-2 rounded-md">
              <div className="flex gap-2 justify-start items-start">
                <School className="w-4 h-4 mt-1" />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">School</p>
                  <p className="text-xs">{post.postDetail.school}m away </p>
                </div>
              </div>
              <div className="flex gap-2 justify-start items-start">
                {/* <Bus className="w-4 h-4 mt-1" /> */}
                <BusFront className="w-4 h-4 mt-1" />

                <div className="flex flex-col">
                  <p className="text-sm font-semibold">Bus</p>
                  <p className="text-xs">{post.postDetail.bus}m away </p>
                </div>
              </div>
              <div className="flex gap-2 justify-start items-start">
                <UtensilsCrossed className="w-4 h-4 mt-1" />

                <div className="flex flex-col">
                  <p className="text-sm font-semibold">Restaurant</p>
                  <p className="text-xs">{post.postDetail.restaurant}m away </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 ">
            <h2 className="text-lg font-semibold ">Location</h2>
            <div className="w-full md:h-52 h-44 ">
              <Map items={[post]} />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button className="text-sm border border-yellow-200 flex gap-1 bg-yellow-200 p-2 rounded-md">
              <span>
                <MessageSquare className="w-5" />
              </span>
              Send Message
            </button>
            <button
              onClick={handleSave}
              className="text-sm border border-yellow-200 flex gap-1 bg-yellow-200 p-2 rounded-md"
            >
              {" "}
              <span>
                <Bookmark className={`w-5 ${saved ? "fill-black" : "fill-white"} `} />
              </span>{" "}
              {saved ? "place saved" :"Save Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
