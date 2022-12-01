import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import api from "../api/api";
import DoctorItem from "../components/DoctorItem";
import NoResultsAnimation from "../components/NoResultsAnimation";
import SearchingAnimation from "../components/SearchingAnimation";

const DoctorsListing = ({ latitude, longitude, name }) => {
  const { t } = useTranslation();
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDoctors = async () => {
    try {
      setIsLoading(true);
      const res = await api.get(
        `/users/search?latitude=${latitude}&longitude=${longitude}&name=${name}&type=1`
      );
      setDoctors(res.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDoctors();
  }, [name, latitude, longitude]);

  return (
    <div className="px-2  md:px-0">
      <div className="container items-center max-w-xl px-2 mx-auto xl:px-5">
        {isLoading ? (
          <SearchingAnimation />
        ) : !doctors.length ? (
          <NoResultsAnimation />
        ) : (
          <div className="flex flex-wrap items-center sm:-mx-3 space-y-2 bg-white">
            {doctors.map((doctor) => (
              <DoctorItem
                key={doctor.id}
                id={doctor.id}
                name={t("ln") === "en" ? doctor?.en_name : doctor?.ar_name}
                country={
                  t("ln") === "en" ? doctor?.en_country : doctor?.ar_country
                }
                city={t("ln") === "en" ? doctor?.en_city : doctor?.ar_city}
                address={
                  t("ln") === "en" ? doctor?.en_address : doctor?.ar_address
                }
                photo={doctor?.first_media_only?.original_url}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsListing;
