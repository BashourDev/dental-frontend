// import
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect, useState } from "react";

const SearchField2 = () => {
  const [query, setQuery] = useState("");

  // setup
  const provider = new OpenStreetMapProvider();

  const getResult = async () => {
    await provider.search({ query: query });
  };

  useEffect(() => {
    getResult();
  }, [query]);

  return (
    <input
      className="w-full h-14 rounded-md ring-1 ring-dark-blue"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchField2;
