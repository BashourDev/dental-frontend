import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import DotcorInfoWizardStep from "../components/DotcorInfoWizardStep";
import LocationWizardStep from "../components/LocationWizardStep";
import DoctorsListing from "./DoctorsListing";

const FindDoctorWizard = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [cords, setCords] = useState({});
  return (
    <>
      <StepWizard className="max-w-5xl w-full">
        <LocationWizardStep
          stepName="location"
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
          cords={cords}
          setCords={setCords}
          stepToGoTo={"doctor-info"}
        />
        <DotcorInfoWizardStep
          stepName="doctor-info"
          name={name}
          setName={setName}
        />
        <DoctorsListing
          stepName="doctors-listing"
          latitude={cords.latitude}
          longitude={cords.longitude}
          name={name}
        />
      </StepWizard>
    </>
  );
};

export default FindDoctorWizard;
