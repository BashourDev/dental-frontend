import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import CompanyInfoWizardStep from "../components/CompanyInfoWizardStep";
import DotcorInfoWizardStep from "../components/DotcorInfoWizardStep";
import LocationWizardStep from "../components/LocationWizardStep";
import CompaniesListing from "./CompaniesListing";
import DoctorsListing from "./DoctorsListing";

const FindCompanyWizard = () => {
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
          stepToGoTo={"company-info"}
        />
        <CompanyInfoWizardStep
          stepName="company-info"
          name={name}
          setName={setName}
        />
        <CompaniesListing
          stepName="companies-listing"
          latitude={cords.latitude}
          longitude={cords.longitude}
          name={name}
        />
      </StepWizard>
    </>
  );
};

export default FindCompanyWizard;
