import React from "react";
import AppForm from "../forms/AppForm";
import AppFormInput from "../forms/AppFormInput";
import AppSubmitButton from "../forms/AppSubmitButton";
import AppModal from "./AppModal";
import * as Yup from "yup";

const EditPlanFeatureModal = ({
  isOpen,
  onClose,
  setFeatures,
  selectedFeature,
}) => {
  const handleSubmit = (values) => {
    setFeatures((old) =>
      old.map((o) => {
        if (o.en_name === selectedFeature?.en_name) {
          o.en_name = values.en_name;
          o.ar_name = values.ar_name;
        }
        return o;
      })
    );

    onClose();
  };
  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"Add Feature"}>
      <div className="space-y-3">
        <AppForm
          initialValues={{
            en_name: selectedFeature?.en_name,
            ar_name: selectedFeature?.ar_name,
          }}
          validationSchema={Yup.object().shape({
            en_name: Yup.string().required().label("English Title"),
            ar_name: Yup.string().required().label("Arabic Title"),
          })}
          onSubmit={handleSubmit}
        >
          <AppFormInput
            id={"en_name"}
            label={"Feature Title in English "}
            placeholder={"Enter The Feature Title in English Here"}
            isRequired={true}
          />

          <AppFormInput
            id={"ar_name"}
            label={"Feature Title in Arabic "}
            placeholder={"Enter The Feature Title in Arabic Here"}
            isRequired={true}
          />
          <AppSubmitButton>Update</AppSubmitButton>
        </AppForm>
      </div>
    </AppModal>
  );
};

export default EditPlanFeatureModal;
