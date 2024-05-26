import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup >
        <div className="flex h-20 space-x-2">
          <img src={item.img} alt="img" className="w-20 h-full object-cover " />
          <div className="grid grid-rows-3 justify-center items-start w-30">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <p>{item.bedroom} bedrooms</p>
            <p>${item.price}</p>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
