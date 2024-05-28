import Slider from "@/components/Slider";
import { singlePostData, userData } from "@/lib/dummydata";
import { MapPin } from "lucide-react";

const Details = () => {
  return (
    <div className="relative flex max-sm:flex-col lg:ml-16 lg:mr-16 max-sm:p-3 sm:pl-5 sm:h-[100vh]">
      <div className="w-full sm:w-[60%] flex flex-col sm:p-5 overflow-y-scroll space-y-6 mb-2">
        <div>
          <Slider images={singlePostData.images} />
        </div>
        <div className="flex justify-between items-center h-fit">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{singlePostData.title}</h2>
            <div className="flex gap-1">
              <MapPin className="text-sm w-4 " />
              <p>{singlePostData.address}</p>
            </div>
            <p className="bg-yellow-200 w-fit p-1 rounded-sm ">
              ${singlePostData.price}
            </p>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center bg-yellow-100 h-full p-3 rounded-md ">
              <img
                src={userData.img}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover "
              />
              <p className="text-sm font-medium text-black">{userData.name}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm">{singlePostData.description}</div>
      </div>
      <div className="bg-[#fcf5f3] w-full h-80 sm:h-[100%]  sm:w-[40%]">
        hiii
      </div>
    </div>
  );
};

export default Details;
