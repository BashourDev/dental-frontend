import React from "react";
import { useFormikContext } from "formik";
import Loading from "../Loading";

const AppSubmitButton = ({
  Icon,
  children,
  className,
  type = "submit",
  isLoading,
  onCustomClick,
  ...otherProps
}) => {
  const { handleSubmit } = useFormikContext();
  // const { handleSubmit, errors, dirty } = useFormikContext();

  //   const handleClick = () => {
  //     if (!dirty || Object.keys(errors).length > 0) {
  //       handleSubmit();
  //     }
  //   };

  const handleClick = () => {
    handleSubmit();
    if (onCustomClick) {
      onCustomClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={isLoading}
      className={`flex items-center justify-center outline-none w-full rounded-md px-3 py-1 transition duration-100 h-10 bg-light-green text-white hover:bg-light-green/95 text-sm lg:text-base ${className}`}
      {...otherProps}
    >
      {Icon && <Icon />}
      {isLoading ? <Loading className={"w-8 h-8"} /> : children}
    </button>
  );
};

export default AppSubmitButton;
