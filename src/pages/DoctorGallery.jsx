import React, { useState } from "react";
import DoctorGalleryItem from "../components/DoctorGalleryItem";

const DoctorGallery = () => {
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
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {gallery.map((g, i) => (
        <DoctorGalleryItem
          key={i}
          before={g?.before}
          after={g?.after}
          description={g?.description}
        />
      ))}
    </div>
  );
};

export default DoctorGallery;
