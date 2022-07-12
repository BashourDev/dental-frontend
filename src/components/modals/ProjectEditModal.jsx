import React, { useState } from "react";
import AppPictureInput from "../AppPictureInput";
import AppForm from "../forms/AppForm";
import AppFormTextArea from "../forms/AppFormTextArea";
import * as Yup from "yup";
import AppSubmitButton from "../forms/AppSubmitButton";
import AppModal from "./AppModal";
import { useTranslation } from "react-i18next";

const ProjectEditModal = ({
  id,
  isOpen,
  onClose,
  description,
  selectedBefore,
  setSelectedBefore,
  selectedAfter,
  setSelectedAfter,
}) => {
  const { t } = useTranslation();
  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={t("edit_project")}>
      <div className="space-y-3">
        <div className="flex gap-x-2 justify-evenly py-2">
          <div className="text-dark">
            <h3>{t("before")}</h3>
            <AppPictureInput
              selectedFile={selectedBefore}
              onChange={(e) => setSelectedBefore(e.target.files[0])}
            />
          </div>
          <div className="text-dark">
            <h3>{t("after")}</h3>
            <AppPictureInput
              selectedFile={selectedAfter}
              onChange={(e) => setSelectedAfter(e.target.files[0])}
            />
          </div>
        </div>
        <AppForm
          initialValues={{ description: description }}
          validationSchema={Yup.object().shape({
            // description: Yup.string().required().label("Description"),
          })}
        >
          <AppFormTextArea
            id={"en_description"}
            label={t("english_description")}
            placeholder={t("english_description")}
          />
          <AppFormTextArea
            id={"ar_description"}
            label={t("arabic_description")}
            placeholder={t("arabic_description")}
          />
          <AppSubmitButton>{t("save_changes")}</AppSubmitButton>
        </AppForm>
      </div>
    </AppModal>
  );
};

export default ProjectEditModal;
