import React, { useState } from "react";
import AppPictureInput from "../AppPictureInput";
import AppForm from "../forms/AppForm";
import AppFormTextArea from "../forms/AppFormTextArea";
import * as Yup from "yup";
import AppSubmitButton from "../forms/AppSubmitButton";
import AppModal from "./AppModal";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import api from "../../api/api";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import swal from "sweetalert";

const ProjectAddModal = ({ isOpen, onClose, setGallery }) => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBefore, setSelectedBefore] = useState("");
  const [selectedAfter, setSelectedAfter] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (values) => {
    if (!selectedAfter) {
      swal({
        icon: "warning",
        text: t("please_select_the_after_image"),
      });
      return;
    }

    let formData = new FormData();
    formData.append("before", selectedBefore);
    formData.append("after", selectedAfter);
    formData.append("en_description", values.en_description);
    formData.append("ar_description", values.ar_description);
    formData.append("before_exists", selectedBefore ? 1 : 0);

    const res = await api.post(`/users/${user.id}/projects/create`, formData);
    setGallery((old) => [res.data, ...old]);
    onClose();
    swal(t("created_successfully"), {
      icon: "success",
    });
  };

  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={t("create_new_project")}>
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
          initialValues={{ en_description: "", ar_description: "" }}
          validationSchema={Yup.object().shape({
            en_description: Yup.string().required(t("required_field")),
            ar_description: Yup.string().required(t("required_field")),
          })}
          onSubmit={handleSubmit}
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
          <AppSubmitButton isLoading={isLoading}>{t("create")}</AppSubmitButton>
        </AppForm>
      </div>
    </AppModal>
  );
};

export default ProjectAddModal;
