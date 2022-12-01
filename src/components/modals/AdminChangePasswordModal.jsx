import React, { useState } from "react";
import { useContext } from "react";
import swal from "sweetalert";
import * as Yup from "yup";
import api from "../../api/api";
import UserContext from "../../contexts/userContext";
import AppForm from "../forms/AppForm";
import AppFormInput from "../forms/AppFormInput";
import AppSubmitButton from "../forms/AppSubmitButton";
import AppModal from "./AppModal";

const AdminChangePasswordModal = ({ isOpen, onClose }) => {
  const {
    user: { id },
  } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
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
      then: Yup.string().required(),
    }),
    newPassword: Yup.string().when("updatePassword", {
      is: true,
      then: Yup.string().required(),
    }),
    passwordConfirmation: Yup.string().when("updatePassword", {
      is: true,
      then: Yup.string().oneOf(
        [Yup.ref("newPassword"), null],
        "password confirmation mismatch"
      ),
    }),
  });

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      setPasswordError(false);
      await api.put(`/users/${id}/change-password`, values);
      onClose();
      swal("Updated Successfully", {
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"Change Password"}>
      <div className="space-y-3">
        <h3 className="text-error text-lg font-semibold">
          {passwordError && "Current Password Mismatch!"}
        </h3>
        <AppForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <AppFormInput
            id={"oldPassword"}
            label={"Current Password "}
            placeholder={"••••••••••"}
            isRequired={true}
            type={"password"}
          />
          <AppFormInput
            id={"newPassword"}
            label={"New Password "}
            placeholder={"••••••••••"}
            isRequired={true}
            type={"password"}
          />
          <AppFormInput
            id={"passwordConfirmation"}
            label={"Confirm Password "}
            placeholder={"••••••••••"}
            isRequired={true}
            type={"password"}
          />
          <AppSubmitButton isLoading={isLoading}>Update</AppSubmitButton>
        </AppForm>
      </div>
    </AppModal>
  );
};

export default AdminChangePasswordModal;
