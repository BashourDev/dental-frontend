import { useState } from "react";
import { MdAdd } from "react-icons/md";
import AppButton from "../components/controls/AppButton";
import ProjectAddModal from "../components/modals/ProjectAddModal";
import ProjectEditModal from "../components/modals/ProjectEditModal";
import UserGalleryPreviewItem from "../components/UserGalleryPreviewItem";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import UserContext from "../contexts/userContext";
import api from "../api/api";
import { useEffect } from "react";

const UserGalleryPreview = () => {
  const { t } = useTranslation();
  const [gallery, setGallery] = useState([]);
  const [isAddOpen, setisAddOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const { user } = useContext(UserContext);

  const getProjects = async () => {
    if (user?.type === 1) {
      const res = await api.get(`/doctors/${user?.id}/projects`);
      setGallery(res.data);
    } else {
      const res = await api.get(`/companies/${user?.id}/projects`);
      setGallery(res.data);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const handleAdd = () => {
    setisAddOpen(true);
  };

  const handleEdit = (proID) => {
    setSelectedProject(proID);
    setIsUpdateOpen(true);
  };

  const handleRemove = (proID) => {
    swal({
      title: t("are_you_sure"),
      text: t("delete_project_message"),
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(t("project_deleted_message"), {
          icon: "success",
        });
      } else {
        swal(t("project_safe_message"));
      }
    });
  };

  return (
    <div className="space-y-5 flex flex-col items-center w-full max-w-5xl">
      <AppButton
        Icon={MdAdd}
        onClick={handleAdd}
        className="w-1/2 sm:w-1/3 max-w-3xl"
      >
        {t("create_new_project")}
      </AppButton>
      <div className="flex flex-wrap gap-4 justify-center w-full max-w-5xl">
        {gallery.map((g, i) => (
          <UserGalleryPreviewItem
            key={i}
            before={g?.before}
            after={g?.after}
            description={
              t("ln") === "en" ? g?.en_description : g?.ar_description
            }
            onEdit={handleEdit}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <ProjectAddModal isOpen={isAddOpen} onClose={() => setisAddOpen(false)} />
      <ProjectEditModal
        isOpen={isUpdateOpen}
        onClose={() => setIsUpdateOpen(false)}
        id={selectedProject}
      />
    </div>
  );
};

export default UserGalleryPreview;
