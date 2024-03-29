import React from "react";
import Loading from "../Loading";

const AppButton = ({
  Icon,
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center outline-none rounded-md px-3 py-1 transition duration-100 h-10 bg-light-green text-white hover:bg-light-green/95 text-sm lg:text-base ${className}`}
    >
      {Icon && <Icon />}
      {isLoading ? <Loading className="w-8 h-8" /> : children}
    </button>
  );
};

export default AppButton;
