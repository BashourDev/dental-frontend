import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import api from "../api/api";
import CompanyItem from "../components/CompanyItem";
import DoctorItem from "../components/DoctorItem";
import NoResultsAnimation from "../components/NoResultsAnimation";
import SearchingAnimation from "../components/SearchingAnimation";

const CompaniesListing = ({ latitude, longitude, name }) => {
  const { t } = useTranslation();
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCompanies = async () => {
    try {
      setIsLoading(true);
      const res = await api.get(
        `/users/search?latitude=${latitude}&longitude=${longitude}&name=${name}&type=2`
      );

      setCompanies(res.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCompanies();
  }, [name, latitude, longitude]);

  return (
    <div className="px-2 md:px-0">
      <div className="container items-center max-w-xl px-2 mx-auto xl:px-5">
        {isLoading ? (
          <SearchingAnimation />
        ) : !companies.length ? (
          <NoResultsAnimation />
        ) : (
          <div className="flex flex-wrap items-center sm:-mx-3 space-y-2 bg-white">
            {companies.map((company) => (
              <CompanyItem
                key={company.id}
                id={company.id}
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
        )}
      </div>
    </div>
  );
};

export default CompaniesListing;
