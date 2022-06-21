import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import L from "leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = (props) => {
  const map = useMapEvents({
    click: async (e) => {
      props.setMarkerPos([e.latlng.lat, e.latlng.lng]);
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${e.latlng.lat}&lon=${e.latlng.lng}&format=json`
      );
      props.setCountry(res.data.address.country);
      if (res.data.address.city) {
        props.setCity(res.data.address.city);
      } else {
        props.setCity(res.data.address.state);
      }
    },
  });
  return null;
};

const LocationWizardStep = (props) => {
  const [markerPos, setMarkerPos] = useState([33.513144, 36.276679]);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const getLocation = async () => {
    if ("geolocation" in navigator) {
      try {
        setIsLoadingLocation(true);
        navigator.geolocation.getCurrentPosition(async function (position) {
          setMarkerPos([position.coords.latitude, position.coords.longitude]);
          const res = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
          );
          props.setCountry(res.data.address.country);
          if (res.data.address.city) {
            props.setCity(res.data.address.city);
          } else {
            props.setCity(res.data.address.state);
          }
        });
      } catch (error) {
      } finally {
        setIsLoadingLocation(false);
      }
    }
  };

  return (
    <div className="px-2 py-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <div className="text-xl font-extrabold tracking-tight text-dark-blue sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl cursor-pointer">
                <span className="block xl:inline">
                  Please Enter Your Location Or{" "}
                </span>
                <button
                  onClick={() => getLocation()}
                  className="block text-dark-green xl:inline underline"
                >
                  Let Us Select It For You
                </button>
              </div>
              {isLoadingLocation ? <Loading className="w-8 h-8" /> : null}
              <input
                type="text"
                value={props.country}
                onChange={(e) => props.setCountry(e.target.value)}
                placeholder={"Enter Your Country Name"}
                className={
                  "text-dark-blue w-full md:w-5/6 h-12 rounded-md border border-medium-gray/40 px-2 ring-0  transition outline-none focus:border-dark-blue/60"
                }
              />
              <input
                type="text"
                value={props.city}
                onChange={(e) => props.setCity(e.target.city)}
                placeholder={"Enter Your City Name"}
                className={
                  "text-dark-blue w-full md:w-5/6 h-12 rounded-md border border-medium-gray/40 px-2 ring-0 transition outline-none focus:border-dark-blue/60"
                }
              />
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <button
                  onClick={() => props.goToNamedStep("doctor-info")}
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-light-green rounded-md sm:mb-0 hover:bg-light-green/90 sm:w-auto"
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                <Link
                  to="/faqs"
                  className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              {/* <img src="https://media.istockphoto.com/photos/together-we-save-more-lives-than-we-would-individually-picture-id1152347304?k=20&m=1152347304&s=612x612&w=0&h=Xlz-5Qw4RRCor_lp71rxJuK9iTcOKouLWZlk_2GDgEc=" /> */}
              <MapContainer
                center={[33.513144, 36.276679]}
                zoom={8}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={false}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
                className="w-full sm:w-[36rem] h-[26rem]"
              >
                <MapComponent setMarkerPos={setMarkerPos} {...props} />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={markerPos} draggable={true}>
                  <Popup>Continue with this location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationWizardStep;
