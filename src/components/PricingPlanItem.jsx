import React from "react";
import { Link } from "react-router-dom";

const PricingPlanItem = ({ name, price, properties }) => {
  return (
    <>
      <div className="flex flex-col w-72 mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center p-10 bg-gray-200">
          <span className="font-semibold">{name}</span>
          <div className="flex items-center">
            <span className="text-3xl">$</span>
            <span className="text-5xl font-bold">{price}</span>
            <span className="text-2xl text-gray-500">/mo</span>
          </div>
        </div>
        <div className="p-10">
          <ul>
            {properties.map((p, i) => (
              <li key={i} className="flex items-center">
                <svg
                  className="w-5 h-5 text-dark-green fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">{p?.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex px-10 pb-10 justfy-center h-full">
          <Link
            to={"/register"}
            className="flex self-end items-center justify-center w-full h-12 px-6 text-sm uppercase bg-light-green text-white rounded-lg"
          >
            Join now
          </Link>
        </div>
      </div>
    </>
  );
};

export default PricingPlanItem;
