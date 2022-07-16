import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import L from "leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import SearchField from "./SearchField";
import SearchField2 from "./SearchField2";
import { useTranslation } from "react-i18next";
import swal from "sweetalert";
// import Search from "react-leaflet-search";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = (props) => {
  const map = useMapEvents({
    click: async (e) => {
      props.setMarkerPos([e.latlng.lat, e.latlng.lng]);
      props.setCords({ latitude: e.latlng.lat, longitude: e.latlng.lng });
      // const res = await axios.get(
      //   `https://nominatim.openstreetmap.org/reverse?lat=${e.latlng.lat}&lon=${e.latlng.lng}&format=json`
      // );
      // props.setCountry(res.data.address.country);
      // if (res.data.address.city) {
      //   props.setCity(res.data.address.city);
      // } else {
      //   props.setCity(res.data.address.state);
      // }
    },
  });
  map.on("geosearch/showlocation", (e) => {
    props.setCords({ latitude: e.location.y, longitude: e.location.x });
  });

  useEffect(() => {
    if (props.cords.latitude) {
      props.setMarkerPos([props.cords.latitude, props.cords.longitude]);
    }
  }, [props.cords]);

  return null;
};

const LocationWizardStep = (props) => {
  const { t } = useTranslation();
  const [markerPos, setMarkerPos] = useState([33.513144, 36.276679]);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const getLocation = async () => {
    if ("geolocation" in navigator) {
      try {
        setIsLoadingLocation(true);
        navigator.geolocation.getCurrentPosition(async function (position) {
          setMarkerPos([position.coords.latitude, position.coords.longitude]);
          props.setCords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          // const res = await axios.get(
          //   `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
          // );
          // props.setCountry(res.data.address.country);
          // if (res.data.address.city) {
          //   props.setCity(res.data.address.city);
          // } else {
          //   props.setCity(res.data.address.state);
          // }
        });
      } catch (error) {
      } finally {
        setIsLoadingLocation(false);
      }
    }
  };

  const handleGoToNextStep = () => {
    if (!props.cords.latitude) {
      swal({
        icon: "warning",
        text: t("please_select_your_coordinates"),
      });
      return;
    }
    props.goToNamedStep(props.stepToGoTo);
  };

  return (
    <div
      className={`px-2 ${props.hideNext ? "pb-5" : "py-20"} bg-white md:px-0`}
    >
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-col flex-wrap items-center sm:-mx-3">
          <div className="w-full md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <div className="pb-5 text-xl font-extrabold tracking-tight text-dark-blue sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl cursor-pointer">
                <span className="block xl:inline">
                  {t("please_enter_your_location_or")}{" "}
                </span>
                <button
                  onClick={() => getLocation()}
                  className="block text-dark-green xl:inline underline"
                >
                  {t("let_us_select_it_For_you")}
                </button>
              </div>
              {isLoadingLocation ? <Loading className="w-8 h-8" /> : null}
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl">
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
                className="w-full max-w-5xl h-[26rem] relative"
              >
                <MapComponent
                  setMarkerPos={setMarkerPos}
                  setCords={props.setCords}
                  {...props}
                />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={markerPos} draggable={true}>
                  <Popup>Continue with this location</Popup>
                </Marker>
                <SearchField />
              </MapContainer>
            </div>
          </div>
          {props.hideNext ? null : (
            <div className="relative w-full flex justify-start flex-col sm:flex-row sm:gap-x-4 py-10">
              <button
                onClick={handleGoToNextStep}
                className={`flex ${
                  t("ln") === "en" ? "flex-row" : "flex-row-reverse"
                } items-center w-full px-6 py-3 mb-3 text-lg text-white bg-light-green rounded-md sm:mb-0 hover:bg-light-green/90 sm:w-auto`}
              >
                {t("next")}
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
                {t("learn_more")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationWizardStep;
