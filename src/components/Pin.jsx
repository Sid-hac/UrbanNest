import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

import { Icon } from "leaflet";
import defaultIconPng from "leaflet/dist/images/marker-icon.png";


const Pin = ({ item }) => {
  

const defaultIcon = new Icon({
  iconUrl:
  defaultIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


  return (
    <Marker  icon={defaultIcon}  position={[item.latitude, item.longitude]}>
      <Popup className="w-[250px]" >
        <div className="flex h-20 space-x-2">
          <img src={item.images[0]} alt="img" className="w-16 h-full object-cover rounded-md" />
          <div className="grid grid-rows-3 gap-4 w-48 ">
            <Link to={`/${item.id}`} className="w-40"  >{item.title}  </Link>
            <span className="flex" >{item.bedroom} bedroom</span>
            <span className="flex" >${item.price}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
