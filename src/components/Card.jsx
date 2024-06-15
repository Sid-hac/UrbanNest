import { Bath, BedDouble, Bookmark, MapPin, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  
  

  return (
    <div className="grid grid-cols-3 gap-5 justify-between items-center w-full ">
      <div className="col-span-1 h-32 ">
        <Link to={`/${item.id}`}>
          <img
            src={item.images[0]}
            alt="card img"
            className="w-full h-full rounded-md object-cover "
          />
        </Link>
      </div>
      <div className="col-span-2 flex flex-col justify-between items-start space-y-2">
        <div className="flex flex-col gap-1">
          <Link to={`/${item.id}`}>
            <h2 className="sm:text-lg text-sm font-semibold">{item.title}</h2>
          </Link>
          <div className="flex gap-1 text-sm">
            <MapPin className="text-sm w-4 " />
            <p>{item.address}</p>
          </div>
        </div>
        <p className="bg-yellow-200 w-fit p-1 rounded-sm ">${item.price}</p>
        <div className="flex justify-between w-full">
          <div className="flex justify-center items-center gap-3">
            <div className="flex gap-1">
              <div className="flex justify-center items-center gap-1" >
                <BedDouble className="w-4" />
                <p className="text-sm">{item.bedroom} </p>
                <p className="flex max-sm:hidden">bedroom</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Bath className="w-4" />
              <div className="flex justify-center items-center gap-1 ">
                <p className="text-sm">{item.bathroom} </p>
                <p className="flex max-sm:hidden">bathroom</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Bookmark className="w-5 border border-slate-200  " />
            <MessageSquare className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
