import React, { useState } from "react";
import AppPictureInput from "../AppPictureInput";
import AppForm from "../forms/AppForm";
import AppFormTextArea from "../forms/AppFormTextArea";
import * as Yup from "yup";
import AppSubmitButton from "../forms/AppSubmitButton";
import AppModal from "./AppModal";
import { useTranslation } from "react-i18next";
import api from "../../api/api";
import swal from "sweetalert";
import { useEffect } from "react";

const ProjectEditModal = ({ id, isOpen, onClose, setGallery }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBefore, setSelectedBefore] = useState("");
  const [selectedAfter, setSelectedAfter] = useState("");
  const [project, setProject] = useState({
    en_description: "",
    ar_description: "",
  });

  const getProject = async () => {
    if (id !== 0) {
      const res = await api.get(`/projects/${id}`);
      setProject(res.data);
    }
  };

  useEffect(() => {
    getProject();
  }, [id]);

  const handleSubmit = async (values) => {
    let formData = new FormData();
    formData.append("before", selectedBefore);
    formData.append("after", selectedAfter);
    formData.append("en_description", values.en_description);
    formData.append("ar_description", values.ar_description);
    formData.append("update_before", selectedBefore ? 1 : 0);
    formData.append("update_after", selectedAfter ? 1 : 0);

    const res = await api.post(`/projects/${id}/update`, formData);
    setGallery((old) =>
      old.map((o) => {
        if (o.id === id) {
          o = res.data;
        }
        return o;
      })
    );
    onClose();
    swal(t("updated_successfully"), {
      icon: "success",
    });
  };

  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={t("edit_project")}>
      <div className="space-y-3">
        <div className="flex gap-x-2 justify-evenly py-2">
          <div className="text-dark">
            <h3>{t("before")}</h3>
            <AppPictureInput
              selectedFile={selectedBefore}
              existingImage={project?.before?.original_url}
              onChange={(e) => setSelectedBefore(e.target.files[0])}
            />
          </div>
          <div className="text-dark">
            <h3>{t("after")}</h3>
            <AppPictureInput
              selectedFile={selectedAfter}
              existingImage={project?.after?.original_url}
              onChange={(e) => setSelectedAfter(e.target.files[0])}
            />
          </div>
        </div>
        <AppForm
          initialValues={project}
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
          <AppSubmitButton>{t("save_changes")}</AppSubmitButton>
        </AppForm>
      </div>
    </AppModal>
  );
};

export default ProjectEditModal;
