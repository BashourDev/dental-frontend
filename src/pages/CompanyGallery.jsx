import React, { useState } from "react";
import CompanyGalleryItem from "../components/CompanyGalleryItem";

const CompanyGallery = () => {
  const [gallery, setGallery] = useState([
    {
      image:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      image:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      image:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      image:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
    {
      image:
        "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus odit, ducimus quia exercitationem assumenda eum sunt vitae dicta eius consectetur accusamus quae maxime, debitis quasi commodi nemo nulla dolorum.",
    },
  ]);
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {gallery.map((g, i) => (
        <CompanyGalleryItem
          key={i}
          image={g?.image}
          description={g?.description}
        />
      ))}
    </div>
  );
};

export default CompanyGallery;
