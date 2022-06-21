import React, { useState } from "react";
import { AiOutlineKey, AiOutlineMail } from "react-icons/ai";
import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Doctors } from "../assets/doctors.svg";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().label("Email"),
    password: Yup.string().required("Password is a required field"),
  });
  const handleLogin = (values) => {
    console.log(values);
  };

  return (
    <div className=" flex py-10 items-center justify-between max-w-6xl">
      <Doctors className="w-3/6 h-fit hidden md:block" />
      <div className="w-full md:w-5/12 px-7 bg-white rounded-lg shadow-md pt-4 pb-8">
        <h2 className="text-dark-blue my-4 text-lg lg:text-xl">Login</h2>
        <div className="grid grid-cols-1 gap-y-5 lg:gap-y-6 w-full">
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleLogin(values)}
          >
            <AppFormInput
              id={"email"}
              label={"Email:"}
              placeholder={"enter your email"}
              type="text"
              Icon={AiOutlineMail}
            />
            <AppFormInput
              id={"password"}
              label={"Password:"}
              placeholder={"enter your password"}
              type="password"
              Icon={AiOutlineKey}
            />
            <AppSubmitButton isLoading={isLoading}>Login</AppSubmitButton>
          </AppForm>
          <span className="text-sm mx-1 text-dark">
            don't have an account?{" "}
            <Link to={"/register"} className="text-dark-green">
              register instead
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
