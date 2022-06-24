import { useState } from "react";
import { MdAdd } from "react-icons/md";
import AppButton from "../components/controls/AppButton";
import ProjectAddModal from "../components/modals/ProjectAddModal";
import ProjectEditModal from "../components/modals/ProjectEditModal";
import UserGalleryPreviewItem from "../components/UserGalleryPreviewItem";
import swal from "sweetalert";

const UserGalleryPreview = () => {
  const [gallery, setGallery] = useState([
    {
      before:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      after:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      before:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      after:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      before:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      after:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      before:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      after:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      before:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      after:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      before:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      after:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      before:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      after:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      before:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      after:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      before:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      after:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
  ]);
  const [isAddOpen, setisAddOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const handleAdd = () => {
    setisAddOpen(true);
  };

  const handleEdit = (proID) => {
    setSelectedProject(proID);
    setIsUpdateOpen(true);
  };

  const handleRemove = (proID) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Project!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your project has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your project is safe!");
      }
    });
  };

  return (
    <div className="space-y-5 flex flex-col items-center max-w-5xl">
      <AppButton
        Icon={MdAdd}
        onClick={handleAdd}
        className="w-1/2 sm:w-1/3 max-w-3xl"
      >
        create new project
      </AppButton>
      <div className="flex flex-wrap gap-4 justify-center max-w-5xl">
        {gallery.map((g, i) => (
          <UserGalleryPreviewItem
            key={i}
            before={g?.before}
            after={g?.after}
            description={g?.description}
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
