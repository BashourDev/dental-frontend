import React, { useContext, useState } from "react";
import { AiOutlineKey, AiOutlineMail } from "react-icons/ai";
import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Doctors } from "../assets/doctors.svg";
import { setUser } from "../api/user";
import UserContext from "../contexts/userContext";
import { useTranslation } from "react-i18next";
import api from "../api/api";
import { setToken } from "../api/token";

const Login = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().label("Email"),
    password: Yup.string().required(t("required_field")),
  });
  const handleLogin = async (values) => {
    const res = await api.post("/login", {
      email: values.email,
      password: values.password,
    });
    setUser(res.data.user);
    setToken(res.data.token);
    userContext.setUser(res.data.user);
    navigate("/user-dashboard/profile");
  };

  return (
    <div className=" flex py-10 items-center justify-between max-w-6xl">
      <Doctors className="w-3/6 h-fit hidden md:block" />
      <div className="w-full md:w-5/12 px-7 bg-white rounded-lg shadow-md pt-4 pb-8">
        <h2 className="text-dark-blue my-4 text-lg lg:text-xl">{t("login")}</h2>
        <div className="grid grid-cols-1 gap-y-5 lg:gap-y-6 w-full">
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleLogin(values)}
          >
            <AppFormInput
              id={"email"}
              label={t("email_label")}
              placeholder={t("email_label")}
              type="text"
              Icon={AiOutlineMail}
            />
            <AppFormInput
              id={"password"}
              label={t("password")}
              placeholder={t("password")}
              type="password"
              Icon={AiOutlineKey}
            />
            <AppSubmitButton isLoading={isLoading}>
              {t("login")}
            </AppSubmitButton>
          </AppForm>
          <span className="text-sm mx-1 text-dark">
            {t("dont_have_an_account")}{" "}
            <Link to={"/register"} className="text-dark-green">
              {t("register_instead")}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
