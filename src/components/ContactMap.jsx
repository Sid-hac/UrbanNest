import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const ContactMap = () => {
  const position = [17.2852127, 74.1822147];

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

      <Marker position={position}>
        <Popup className="w-[250px]">
          <div className="flex h-20 space-x-2">
            <img
              src="/logo.png"
              alt="img"
              className="w-16 h-full object-cover rounded-md"
            />
            <div className="grid grid-rows-3 gap-4 w-48 ">
              <p className="w-40 text-2xl font-bold">UrbanNest </p>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
