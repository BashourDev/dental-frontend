import React, { useState } from "react";
import AppPictureInput from "../AppPictureInput";
import AppForm from "../forms/AppForm";
import AppFormTextArea from "../forms/AppFormTextArea";
import * as Yup from "yup";
import AppSubmitButton from "../forms/AppSubmitButton";
import AppModal from "./AppModal";

const ProjectAddModal = ({ isOpen, onClose }) => {
  const [selectedBefore, setSelectedBefore] = useState("");
  const [selectedAfter, setSelectedAfter] = useState("");
  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"Create Project"}>
      <div className="space-y-3">
        <div className="flex gap-x-2 justify-evenly py-2">
          <div className="text-dark">
            <h3>Before</h3>
            <AppPictureInput
              selectedFile={selectedBefore}
              onChange={(e) => setSelectedBefore(e.target.files[0])}
            />
          </div>
          <div className="text-dark">
            <h3>After</h3>
            <AppPictureInput
              selectedFile={selectedAfter}
              onChange={(e) => setSelectedAfter(e.target.files[0])}
            />
          </div>
        </div>
        <AppForm
          initialValues={{ description: "" }}
          validationSchema={Yup.object().shape({
            description: Yup.string().required().label("Description"),
          })}
        >
          <AppFormTextArea
            id={"description"}
            label={"Description"}
            placeholder={"Enter the description here"}
          />
          <AppSubmitButton>Create</AppSubmitButton>
        </AppForm>
      </div>
    </AppModal>
  );
};

export default ProjectAddModal;
