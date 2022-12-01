import React from "react";
import { useFormikContext } from "formik";

const AppFormTextArea = ({
  id,
  label,
  placeholder,
  Icon,
  className,
  containerClassName,
  isRequired = true,
}) => {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  return (
    <div className={containerClassName}>
      <label
        htmlFor={id}
        className="focus:text-dark-blue text-dark text-xs lg:text-sm mb-1 ml-1 focus-within:text-dark-blue"
      >
        {label}
        {isRequired && <span className="text-lg">*</span>}
      </label>
      <div
        className={`w-full test-sm lg:text-base h-24 border-[1px] border-light-gray transition duration-150 rounded-lg flex text-dark focus-within:border-dark-blue/70 ${className} ${
          touched[id] && errors[id] && "border-danger"
        }`}
      >
        <div className="pl-2 pt-1">{Icon && <Icon />}</div>
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={values[id]}
          onChange={handleChange(id)}
          onBlur={(e) => setFieldTouched(id)}
          className="border-0 outline-none px-2 w-full bg-inherit resize-none text-sm lg:text-base focus:ring-0"
        />
      </div>
      {touched[id] && errors[id] && (
        <p className="text-danger mt-1">{errors[id]}</p>
      )}
    </div>
  );
};

export default AppFormTextArea;
