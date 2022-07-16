import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import swal from "sweetalert";
import * as Yup from "yup";
import api from "../api/api";
import AppForm from "./forms/AppForm";
import AppFormInput from "./forms/AppFormInput";
import AppSubmitButton from "./forms/AppSubmitButton";

const ChangePassword = ({ id }) => {
  const { t } = useTranslation();
  const [passwordError, setPasswordError] = useState(false);
  const [initialValues, setInitialValues] = useState({
    oldPassword: "",
    newPassword: "",
    passwordConfirmation: "",
    updatePassword: true,
  });
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().when("updatePassword", {
      is: true,
      then: Yup.string().required(t("required_field")),
    }),
    newPassword: Yup.string().when("updatePassword", {
      is: true,
      then: Yup.string().required(t("required_field")),
    }),
    passwordConfirmation: Yup.string().when("updatePassword", {
      is: true,
      then: Yup.string().oneOf(
        [Yup.ref("newPassword"), null],
        t("passwords_mismatch")
      ),
    }),
  });

  const handleChange = async (values) => {
    try {
      setPasswordError(false);
      const res = await api.put(`/users/${id}/change-password`, values);
      console.log(res);
      swal(t("updated_successfully"), {
        icon: "success",
      });
      setInitialValues({
        oldPassword: "",
        newPassword: "",
        passwordConfirmation: "",
        updatePassword: true,
      });
    } catch (error) {
      if (error.response.status === 422) {
        setPasswordError(true);
      }
    }
  };

  return (
    <div className="bg-white rounded-md max-w-5xl space-y-8 py-5 px-8 shadow-md w-full">
      <h2 className="text-dark-blue text-xl font-semibold">
        {t("change_password")}
      </h2>
      <h3 className="text-error text-lg font-semibold">
        {passwordError && t("current_password_mismatch")}
      </h3>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleChange}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AppFormInput
            id={"oldPassword"}
            label={t("current_password")}
            placeholder={t("current_password")}
            isRequired={true}
            type="password"
          />

          <AppFormInput
            id={"newPassword"}
            label={t("new_password")}
            placeholder={t("new_password")}
            isRequired={true}
            type="password"
          />

          <AppFormInput
            id={"passwordConfirmation"}
            label={t("confirm_new_password")}
            placeholder={t("confirm_new_password")}
            isRequired={true}
            type="password"
          />
        </div>

        <AppSubmitButton>{t("save_changes")}</AppSubmitButton>
      </AppForm>
    </div>
  );
};

export default ChangePassword;
