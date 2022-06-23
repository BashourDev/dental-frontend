import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const CompanyItem = ({ id, name, country, city, address }) => {
  return (
    <Link
      to={`/companies/${id}`}
      className="flex flex-col h-28 w-full bg-white p-2 shadow-sm"
    >
      <div className="flex">
        <div className="min-h-[4rem] max-h-[4rem] min-w-[4rem] max-w-[4rem] rounded-full bg-light-gray/70"></div>
        <div className="w-full flex flex-col justify-between p-2">
          <h4 className="text-base text-dark font-medium">{name}</h4>
          <span className="flex text-sm text-dark/60">
            <MdLocationOn className="mt-0.5" /> {country}, {city}, {address}
          </span>
          <span className="mt-2 text-dark-green hover:text-dark-green/90">
            show info
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CompanyItem;
