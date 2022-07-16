import React from "react";
import { MdLocationOn, MdMyLocation } from "react-icons/md";
import AppButton from "./controls/AppButton";

const ChangePlanRequestItem = ({
  id,
  name,
  country,
  city,
  address,
  photo,
  plan,
  subscription_period,
  handleAcceptChangePlan,
  handleRejectChangePlan,
}) => {
  const getFinalPrice = () => {
    let period = 0;
    switch (subscription_period) {
      case 3:
        period = plan.quarter_price;
        break;
      case 6:
        period = plan.semi_annual_price;
        break;
      case 12:
        period = plan.annual_price;
        break;
    }
    return period;
  };

  return (
    <div className="flex flex-col  w-full bg-white p-2 shadow-sm">
      <div className="flex">
        <div className="min-h-[4rem] min-w-[4rem] max-h-[4rem] max-w-[4rem] rounded-full bg-light-gray/70">
          <img src={photo} alt="profile pic" />
        </div>
        <div className="w-full flex flex-col justify-between p-2">
          <h4 className="text-base text-dark font-medium">
            <span className="text-base font-semibold text-dark-blue">
              {name}
            </span>{" "}
            requests to change his/her plan to {plan?.en_name} with a
            subscription period of {subscription_period} mo. the subscription
            price is {getFinalPrice()} $
          </h4>
          <span className="flex text-sm text-dark/60">
            <MdLocationOn className="mt-0.5" /> {country}, {city}, {address}
          </span>
        </div>
      </div>
      <div className="flex justify-evenly px-16 md:px-24 gap-10">
        <AppButton
          className="mt-2 w-full bg-dark-blue hover:bg-dark-blue/95"
          onClick={() => handleAcceptChangePlan(id)}
        >
          Accept
        </AppButton>
        <AppButton
          className="mt-2 w-full bg-error hover:bg-error"
          onClick={() => handleRejectChangePlan(id)}
        >
          Reject
        </AppButton>
      </div>
    </div>
  );
};

export default ChangePlanRequestItem;
