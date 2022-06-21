import React from "react";
import { MdLocationOn, MdMyLocation } from "react-icons/md";
import AppButton from "./controls/AppButton";

const RequestItem = ({ id, name, country, city, address, onShowDetails }) => {
  return (
    <div className="flex flex-col h-36 w-full bg-white p-2 shadow-sm">
      <div className="flex">
        <div className="min-h-[4rem] min-w-[4rem] rounded-full bg-light-gray/70"></div>
        <div className="w-full flex flex-col justify-between p-2">
          <h4 className="text-base text-dark font-medium">{name}</h4>
          <span className="flex text-sm text-dark/60">
            <MdLocationOn className="mt-0.5" /> {country}, {city}, {address}
          </span>
        </div>
      </div>
      <AppButton className="mt-2 w-3/4 self-center" onClick={onShowDetails}>
        more details
      </AppButton>
    </div>
  );
};

export default RequestItem;
