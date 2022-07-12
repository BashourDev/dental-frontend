import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CompanyItem from "../components/CompanyItem";
import DoctorItem from "../components/DoctorItem";

const CompaniesListing = (props) => {
  const { t } = useTranslation();
  const [companies, setCompanies] = useState([]);

  return (
    <div className="px-2 bg-white md:px-0">
      <div className="container items-center max-w-xl px-2 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3 space-y-2">
          {companies.map((company) => (
            <CompanyItem
              key={company.id}
              name={t("ln") === "en" ? company?.en_name : company?.ar_name}
              country={
                t("ln") === "en" ? company?.en_country : company?.ar_country
              }
              city={t("ln") === "en" ? company?.en_city : company?.ar_city}
              address={
                t("ln") === "en" ? company?.en_address : company?.ar_address
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesListing;
