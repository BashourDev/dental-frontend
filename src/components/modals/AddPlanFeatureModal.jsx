import React from "react";
import AppForm from "../forms/AppForm";
import AppFormInput from "../forms/AppFormInput";
import AppSubmitButton from "../forms/AppSubmitButton";
import AppModal from "./AppModal";
import * as Yup from "yup";

const AddPlanFeatureModal = ({ isOpen, onClose, setFeatures }) => {
  const handleSubmit = (values) => {
    setFeatures((old) => [...old, values]);
    onClose();
  };
  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"Add Feature"}>
      <div className="space-y-3">
        <AppForm
          initialValues={{ en_name: "" }}
          validationSchema={Yup.object().shape({
            en_name: Yup.string().required().label("English Title"),
            ar_name: Yup.string().required().label("Arabic Title"),
          })}
          onSubmit={handleSubmit}
        >
          <AppFormInput
            id={"en_name"}
            label={"Feature Title in English "}
            placeholder={"Enter The Feature Title Here"}
            isRequired={true}
          />
          <AppFormInput
            id={"ar_name"}
            label={"Feature Title in Arabic "}
            placeholder={"Enter The Feature Title Here"}
            isRequired={true}
          />
          <AppSubmitButton>Create</AppSubmitButton>
        </AppForm>
      </div>
    </AppModal>
  );
};

export default AddPlanFeatureModal;
