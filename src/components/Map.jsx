import { MapContainer, TileLayer } from "react-leaflet";

const position = [51.505, -0.09];
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";

const Map = ({ items }) => {
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className=" h-80 sm:h-[100%] rounded-md "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
};

export default Map;
