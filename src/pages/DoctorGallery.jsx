import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import api from "../api/api";
import DoctorGalleryItem from "../components/DoctorGalleryItem";

const DoctorGallery = () => {
  const { t } = useTranslation();
  const [gallery, setGallery] = useState([]);
  const { id } = useParams();

  const getProjects = async () => {
    const res = await api.get(`/doctors/${id}/projects`);
    setGallery(res.data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {gallery.map((g, i) => (
        <DoctorGalleryItem
          key={i}
          before={g?.before}
          after={g?.after}
          description={t("ln") === "en" ? g?.en_description : g?.ar_description}
        />
      ))}
    </div>
  );
};

export default DoctorGallery;
