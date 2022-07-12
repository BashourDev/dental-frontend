import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DoctorItem from "../components/DoctorItem";

const DoctorsListing = (props) => {
  const { t } = useTranslation();
  const [doctors, setDoctors] = useState([]);

  return (
    <div className="px-2 bg-white md:px-0">
      <div className="container items-center max-w-xl px-2 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3 space-y-2">
          {doctors.map((doctor) => (
            <DoctorItem
              key={doctor.id}
              name={t("ln") === "en" ? doctor?.en_name : doctor?.ar_name}
              country={
                t("ln") === "en" ? doctor?.en_country : doctor?.ar_country
              }
              city={t("ln") === "en" ? doctor?.en_city : doctor?.ar_city}
              address={
                t("ln") === "en" ? doctor?.en_address : doctor?.ar_address
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsListing;
