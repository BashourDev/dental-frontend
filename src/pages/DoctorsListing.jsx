import React, { useState } from "react";
import DoctorItem from "../components/DoctorItem";

const DoctorsListing = (props) => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Bashour Atrini",
      country: "Syria",
      city: "Homs",
      address: "Al-Qalatiah main street",
      bio: "something about myself which is supposed to be a long long long text and this is just for testing",
      phone: "+963943432432",
      email: "some@email.com",
      type: "Doctor",
    },
    {
      id: 2,
      name: "Bashour Atrini 2",
      country: "Syria",
      city: "Homs",
      address: "Al-Qalatiah main street",
      bio: "something about myself which is supposed to be a long long long text and this is just for testing",
      phone: "+963943432432",
      email: "some@email.com",
      type: "Company",
    },
    {
      id: 3,
      name: "Bashour Atrini 3",
      country: "Syria",
      city: "Homs",
      address: "Al-Qalatiah main street",
      bio: "something about myself which is supposed to be a long long long text and this is just for testing",
      phone: "+963943432432",
      email: "some@email.com",
      type: "Doctor",
    },
  ]);

  return (
    <div className="px-2 bg-white md:px-0">
      <div className="container items-center max-w-xl px-2 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3 space-y-2">
          {doctors.map((doctor) => (
            <DoctorItem
              key={doctor.id}
              name={doctor?.name}
              country={doctor?.country}
              city={doctor?.city}
              address={doctor?.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsListing;
