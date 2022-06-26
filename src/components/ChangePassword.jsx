import React from "react";
import * as Yup from "yup";
import AppForm from "./forms/AppForm";
import AppFormInput from "./forms/AppFormInput";
import AppSubmitButton from "./forms/AppSubmitButton";

const ChangePassword = () => {
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().when("updatePassword", {
      is: true,
      then: Yup.string().required("Enter the current password"),
    }),
    newPassword: Yup.string().when("updatePassword", {
      is: true,
      then: Yup.string().required("Enter the new password"),
    }),
    passwordConfirmation: Yup.string().when("updatePassword", {
      is: true,
      then: Yup.string().oneOf(
        [Yup.ref("newPassword"), null],
        "new password and password confirmation should match"
      ),
    }),
  });

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    passwordConfirmation: "",
    updatePassword: true,
  };

  return (
    <div className="bg-white rounded-md max-w-5xl space-y-8 py-5 px-8 shadow-md w-full">
      <h2 className="text-dark-blue text-xl font-semibold">Change Password</h2>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AppFormInput
            id={"oldPassword"}
            label={"Current Password "}
            placeholder={"Enter Your Current Password"}
            isRequired={true}
            type="password"
          />

          <AppFormInput
            id={"newPassword"}
            label={"New Password "}
            placeholder={"Enter The New Password"}
            isRequired={true}
            type="password"
          />

          <AppFormInput
            id={"passwordConfirmation"}
            label={"Confirm New Password "}
            placeholder={"Repeat The New Password"}
            isRequired={true}
            type="password"
          />
        </div>

        <AppSubmitButton>Save Changes</AppSubmitButton>
      </AppForm>
    </div>
  );
};

export default ChangePassword;
