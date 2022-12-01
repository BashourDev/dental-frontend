import React from "react";
import Lottie from "lottie-react";
import loadingAn from "../assets/lotties/search-not-found.json";

const NoResultsAnimation = ({ className = "self-center" }) => {
  return (
    <div className="flex flex-col justify-center items-center self-center w-full h-full max-w-sm max-h-full ">
      <Lottie animationData={loadingAn} loop className={className} />
      <h1 className="text-dark-green text-lg font-medium">
        Sorry, No Results Found!
      </h1>
    </div>
  );
};

export default NoResultsAnimation;
