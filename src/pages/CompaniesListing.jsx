import React, { useState } from "react";
import CompanyItem from "../components/CompanyItem";
import DoctorItem from "../components/DoctorItem";

const CompaniesListing = (props) => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Bashour Atrini",
      country: "Syria",
      city: "Homs",
      address: "Al-Qalatiah main street",
      bio: "something about myself which is supposed to be a long long long text and this is just for testing",
      phone: "+963943432432",
      email: "some@email.com",
      type: "Doctor",
    },
    {
      id: 2,
      name: "Bashour Atrini 2",
      country: "Syria",
      city: "Homs",
      address: "Al-Qalatiah main street",
      bio: "something about myself which is supposed to be a long long long text and this is just for testing",
      phone: "+963943432432",
      email: "some@email.com",
      type: "Company",
    },
    {
      id: 3,
      name: "Bashour Atrini 3",
      country: "Syria",
      city: "Homs",
      address: "Al-Qalatiah main street",
      bio: "something about myself which is supposed to be a long long long text and this is just for testing",
      phone: "+963943432432",
      email: "some@email.com",
      type: "Doctor",
    },
  ]);

  return (
    <div className="px-2 bg-white md:px-0">
      <div className="container items-center max-w-xl px-2 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3 space-y-2">
          {companies.map((company) => (
            <CompanyItem
              key={company.id}
              name={company?.name}
              country={company?.country}
              city={company?.city}
              address={company?.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesListing;
