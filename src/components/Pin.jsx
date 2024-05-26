import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup className="w-[250px]" >
        <div className="flex h-20 space-x-2">
          <img src={item.img} alt="img" className="w-16 h-full object-cover rounded-md" />
          <div className="grid grid-rows-3 gap-4 w-48 ">
            <Link to={`/${item.id}`} className="w-40"  >{item.title}  </Link>
            <span className="flex" >{item.bedroom} bedrooms</span>
            <span className="flex" >${item.price}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
