import React from "react";
import AppForm from "../forms/AppForm";
import AppFormInput from "../forms/AppFormInput";
import AppSubmitButton from "../forms/AppSubmitButton";
import AppModal from "./AppModal";
import * as Yup from "yup";

const AddPlanFeatureModal = ({ isOpen, onClose, setFeatures }) => {
  const handleSubmit = (values) => {
    setFeatures((old) => [...old, values]);
  };
  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"Add Feature"}>
      <div className="space-y-3">
        <AppForm
          initialValues={{ title: "" }}
          validationSchema={Yup.object().shape({
            title: Yup.string().required().label("Title"),
          })}
          onSubmit={handleSubmit}
        >
          <AppFormInput
            id={"title"}
            label={"Feature Title "}
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
