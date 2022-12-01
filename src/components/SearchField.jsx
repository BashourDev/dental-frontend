import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMap } from "react-leaflet";

const SearchField = () => {
  const { t } = useTranslation();
  const provider = new OpenStreetMapProvider({
    params: {
      "accept-language": t("ln"), // render results in Dutch

      addressdetails: 1, // include additional address detail parts
    },
  });

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
    style: "button z-50 bg-white w-full flex items-center absolute",
    showMarker: true,
    showPopup: false,
    autoClose: true,
    retainZoomLevel: false,
    animateZoom: true,
    keepResult: false,
    searchLabel: t("search"),
  });

  const map = useMap();

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};

export default SearchField;
