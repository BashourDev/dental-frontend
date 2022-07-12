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
      <StepWizard>
        <LocationWizardStep
          stepName="location"
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
          setCords={setCords}
          stepToGoTo={"doctor-info"}
        />
        <DotcorInfoWizardStep
          stepName="doctor-info"
          name={name}
          setName={setName}
        />
        <DoctorsListing stepName="doctors-listing" />
      </StepWizard>
    </>
  );
};

export default FindDoctorWizard;
